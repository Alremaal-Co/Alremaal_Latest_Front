import { z } from "zod";

export interface ApiColumn {
  columnName: string;
  labelAr: string;
  labelEn: string;
  dataType: string;
  isNullable?: boolean;
  max?: number;
  min?: number;
  isRelation?: boolean;
  relatedTableEndpoint?: string;
  enumValues?: string[];
  isArray?: boolean;
}

export const buildZodSchema = (
  columns: ApiColumn[],
  t: (key: string, values?: object) => string
) => {
  const schemaShape: Record<string, z.ZodTypeAny> = {};

  columns.forEach((col) => {
    let fieldSchema: z.ZodTypeAny;

    switch (col.dataType.toLowerCase()) {
      case "integer":
      case "bigint":
      case "numeric":
      case "serial":
      case "bigserial":
      case "float":
      case "double precision": {
        let numberSchema = z.number({
          invalid_type_error: t("validation.number.invalid"),
        });

        if (col.min !== undefined) {
          numberSchema = numberSchema.min(col.min, {
            message: t("validation.number.min", { min: col.min }),
          });
        }
        if (col.max !== undefined) {
          numberSchema = numberSchema.max(col.max, {
            message: t("validation.number.max", { max: col.max }),
          });
        }

        fieldSchema = z.preprocess(
          (val) => (val === "" || val === null ? null : Number(val)),
          numberSchema
        );
        break;
      }

      case "boolean": {
        fieldSchema = z.preprocess((val) => {
          if (val === "true" || val === true) return true;
          if (val === "false" || val === false) return false;
          return val;
        }, z.boolean({ invalid_type_error: t("validation.boolean.invalid") }));
        break;
      }

      case "date":
      case "timestamp":
      case "timestamp with time zone": {
        fieldSchema = z.coerce.date({
          invalid_type_error: t("validation.date.invalid"),
        });
        break;
      }

      case "json":
      case "jsonb": {
        fieldSchema = z.preprocess((val) => {
          if (typeof val === "string") {
            try {
              return JSON.parse(val);
            } catch {
              return val;
            }
          }
          return val;
        }, z.any());
        break;
      }

      case "uuid": {
        fieldSchema = z.string({ invalid_type_error: t("validation.string.invalid") }).uuid({
          message: t("validation.string.uuid"),
        });
        break;
      }

      case "enum": {
        if (!col.enumValues || col.enumValues.length === 0) {
          throw new Error(`Column ${col.columnName} marked as enum but missing enumValues`);
        }
        fieldSchema = z.enum(col.enumValues as [string, ...string[]], {
          invalid_type_error: t("validation.enum.invalid"),
        });
        break;
      }

      case "text[]":
      case "varchar[]": {
        fieldSchema = z.array(z.string()).min(1, {
          message: t("validation.array.nonempty"),
        });
        break;
      }

      case "text":
      case "varchar":
      default: {
        let stringSchema = z.string({
          invalid_type_error: t("validation.string.invalid"),
        });

        if (!col.isNullable) {
          stringSchema = stringSchema.min(1, {
            message: t("validation.string.nonempty"),
          });
        }
        if (col.min !== undefined) {
          stringSchema = stringSchema.min(col.min, {
            message: t("validation.string.min", { min: col.min }),
          });
        }
        if (col.max !== undefined) {
          stringSchema = stringSchema.max(col.max, {
            message: t("validation.string.max", { max: col.max }),
          });
        }

        fieldSchema = stringSchema;
        break;
      }
    }

    if (col.isNullable) {
      fieldSchema = fieldSchema.nullable().optional();
    }

    if (col.isArray && !["text[]", "varchar[]"].includes(col.dataType)) {
      fieldSchema = z.array(fieldSchema);
    }

    schemaShape[col.columnName] = fieldSchema;
  });

  return z.object(schemaShape);
};