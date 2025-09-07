"use client";

import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";
import { buildZodSchema, ApiColumn } from "./dynamicFormUtils";
import { renderInputField } from "./render-elements/renderInputField";

interface DynamicFormProps {
  columns: ApiColumn[];
  isLoading: boolean;
  onSubmit: (data: any) => void;
  lang: "en" | "ar";
}

const FIELDS_PER_STEP = 8;

export const DynamicForm = ({
  columns,
  isLoading,
  onSubmit,
  lang,
}: DynamicFormProps) => {
  const t = useTranslations();
  const [currentStep, setCurrentStep] = useState(0);

  // === القيم الافتراضية الديناميكية ===
  const defaultValues = useMemo(() => {
    const values: Record<string, any> = {};
    columns.forEach((col) => {
      switch (col.dataType.toLowerCase()) {
        case "integer":
        case "bigint":
        case "numeric":
        case "serial":
        case "bigserial":
        case "float":
        case "double precision":
          values[col.columnName] = col.isNullable ? null : 0;
          break;

        case "boolean":
          values[col.columnName] = col.isNullable ? null : false;
          break;

        case "date":
        case "timestamp":
        case "timestamp with time zone":
          values[col.columnName] = col.isNullable ? null : undefined;
          break;

        case "json":
        case "jsonb":
          values[col.columnName] = col.isNullable ? null : "{}";
          break;

        case "uuid":
          values[col.columnName] = col.isNullable ? null : "";
          break;

        case "text[]":
        case "varchar[]":
          values[col.columnName] = col.isNullable ? null : [];
          break;

        default:
          values[col.columnName] = col.isNullable ? null : "";
      }
    });
    return values;
  }, [columns]);

  // === إنشاء Zod Schema بناءً على الأعمدة ===
  const zodSchema = useMemo(() => buildZodSchema(columns, t), [columns, t]);

  // === form hook ===
  const form = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues,
    mode: "onBlur", // يدي UX أفضل بدل onChange
  });

  const totalSteps = Math.ceil(columns.length / FIELDS_PER_STEP);
  const isMultiStep = totalSteps > 1;

  const start = currentStep * FIELDS_PER_STEP;
  const end = start + FIELDS_PER_STEP;
  const currentFields = columns.slice(start, end);

  const handleNext = async () => {
    const fieldsToValidate = currentFields.map((f) => f.columnName);
    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 p-6"
        noValidate
      >
        {isMultiStep && (
          <div className="space-y-2">
            <Progress value={((currentStep + 1) / totalSteps) * 100} />
            <p className="text-sm text-muted-foreground">
              {t("form.step", {
                current: currentStep + 1,
                total: totalSteps,
              })}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentFields.map((column) => (
            <div key={column.columnName}>
              {renderInputField(form, column, lang)}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4">
          {isMultiStep && currentStep > 0 && (
            <Button type="button" variant="outline" onClick={handleBack}>
              {t("form.back")}
            </Button>
          )}
          <div className="flex-grow" />
          {isMultiStep && currentStep < totalSteps - 1 && (
            <Button type="button" onClick={handleNext}>
              {t("form.next")}
            </Button>
          )}
          {(!isMultiStep || currentStep === totalSteps - 1) && (
            <Button type="submit" disabled={isLoading}>
              {t("form.submit")}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
