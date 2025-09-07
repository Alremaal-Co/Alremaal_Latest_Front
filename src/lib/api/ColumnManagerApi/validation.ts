// This file is auto-generated. Do not edit directly.

import { z } from 'zod';
import { ColumnManagerController_addColumnRequestDataTypeEnum } from './enums';

/** Zod schema for {@link ColumnManagerController_addColumnRequest}. */
export const ColumnManagerController_addColumnRequestSchema = z.object({
  columnName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الاسم البرمجي للعمود (يُستخدم في قاعدة البيانات)"),
  dataType: z.enum(ColumnManagerController_addColumnRequestDataTypeEnum).describe("نوع بيانات العمود (مثل: text, varchar, integer...)"),
  labelAr: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الاسم الظاهر للعمود باللغة العربية"),
  labelEn: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الاسم الظاهر للعمود باللغة الإنجليزية"),
  isNullable: z.boolean().describe("هل يمكن أن تكون قيمة هذا العمود فارغة (NULL)؟").optional(),
  isSearchable: z.boolean().describe("هل يمكن البحث في هذا العمود؟").optional(),
  isFilterable: z.boolean().describe("هل يمكن فلترة البيانات بناءً على هذا العمود؟").optional(),
  isSortable: z.boolean().describe("هل يمكن ترتيب البيانات بناءً على هذا العمود؟").optional(),
  isSelectable: z.boolean().describe("هل يمكن عرض هذا العمود في استجابات GET؟").optional()
});

export type ColumnManagerController_addColumnRequestValidated = z.infer<typeof ColumnManagerController_addColumnRequestSchema>;

/** Zod schema for {@link ColumnManagerController_addColumnResponse}. */
export const ColumnManagerController_addColumnResponseSchema = z.object({

});

export type ColumnManagerController_addColumnResponseValidated = z.infer<typeof ColumnManagerController_addColumnResponseSchema>;

/** Zod schema for {@link ColumnManagerController_deleteRelationResponse}. */
export const ColumnManagerController_deleteRelationResponseSchema = z.object({

});

export type ColumnManagerController_deleteRelationResponseValidated = z.infer<typeof ColumnManagerController_deleteRelationResponseSchema>;

/** Zod schema for {@link ColumnManagerController_updateColumnRequest}. */
export const ColumnManagerController_updateColumnRequestSchema = z.object({
  labelAr: z.string().describe("القيمة الجديدة لاسم العمود باللغة العربية (اختياري).").optional(),
  labelEn: z.string().describe("القيمة الجديدة لاسم العمود باللغة الإنجليزية (اختياري).").optional(),
  isNullable: z.boolean().describe("تحديد ما إذا كان يمكن أن تكون قيمة هذا العمود فارغة (اختياري).").optional(),
  isSearchable: z.boolean().describe("تحديد ما إذا كان يمكن البحث في هذا العمود (اختياري).").optional(),
  isFilterable: z.boolean().describe("تحديد ما إذا كان يمكن فلترة البيانات بناءً على هذا العمود (اختياري).").optional(),
  isSortable: z.boolean().describe("تحديد ما إذا كان يمكن ترتيب البيانات بناءً على هذا العمود (اختياري).").optional(),
  isSelectable: z.boolean().describe("تحديد ما إذا كان سيتم عرض هذا العمود في استجابات API (اختياري).").optional(),
  columnName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الاسم البرمجي الجديد للعمود")
});

export type ColumnManagerController_updateColumnRequestValidated = z.infer<typeof ColumnManagerController_updateColumnRequestSchema>;