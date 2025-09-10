// This file is auto-generated. Do not edit directly.

import { z } from 'zod';
import { TableManagerController_createOneToManyRelationRequestOnDeleteActionEnum, TableManagerController_createOneToOneRelationRequestOnDeleteActionEnum } from './enums';

/** Zod schema for {@link TableManagerController_createManyToManyRelationRequest}. */
export const TableManagerController_createManyToManyRelationRequestSchema = z.object({
  tableA: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم الجدول الأول في العلاقة (مثل: property_requests)"),
  tableB: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم الجدول الثاني في العلاقة (مثل: districts)"),
  junctionTableName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم الجدول الوسيط الذي سيتم إنشاؤه لربط الجدولين")
});

export type TableManagerController_createManyToManyRelationRequestValidated = z.infer<typeof TableManagerController_createManyToManyRelationRequestSchema>;

/** Zod schema for {@link TableManagerController_createOneToManyRelationRequest}. */
export const TableManagerController_createOneToManyRelationRequestSchema = z.object({
  manySideTable: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الجدول الذي سيحتوي على سجلات \"المتعدد\" (مثل: districts)"),
  oneSideTable: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الجدول الذي سيحتوي على سجل \"الواحد\" (مثل: cities)"),
  relationColumnName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم عمود العلاقة في جدول \"المتعدد\""),
  onDeleteAction: z.enum(TableManagerController_createOneToManyRelationRequestOnDeleteActionEnum).describe("ماذا يحدث عند حذف سجل من جانب \"الواحد\"")
});

export type TableManagerController_createOneToManyRelationRequestValidated = z.infer<typeof TableManagerController_createOneToManyRelationRequestSchema>;

/** Zod schema for {@link TableManagerController_createOneToOneRelationRequest}. */
export const TableManagerController_createOneToOneRelationRequestSchema = z.object({
  primaryTable: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الجدول الرئيسي (مثل: users)"),
  dependentTable: z.string().min(1, { "message": "validation.string.nonempty" }).describe("الجدول التابع الذي سيحتوي على المفتاح الأجنبي (مثل: profiles)"),
  relationColumnName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم عمود العلاقة في الجدول التابع"),
  onDeleteAction: z.enum(TableManagerController_createOneToOneRelationRequestOnDeleteActionEnum).describe("ماذا يحدث عند حذف سجل من الجدول الرئيسي (الافتراضي هو حذف السجل التابع)")
});

export type TableManagerController_createOneToOneRelationRequestValidated = z.infer<typeof TableManagerController_createOneToOneRelationRequestSchema>;

/** Zod schema for {@link TableManagerController_createRequest}. */
export const TableManagerController_createRequestSchema = z.object({
  endpointName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم الـ endpoint"),
  displayName: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم العرض الظاهر للجدول"),
  defaultLimit: z.number().describe("عدد العناصر الافتراضي لكل صفحة"),
  columns: z.array(z.string().min(1, { "message": "validation.string.nonempty" }).describe("...")).describe("تعريف الأعمدة الخاصة بالجدول"),
  typeViewActions: z.string().min(1, { "message": "validation.string.nonempty" }).describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة العربية."),
  select2NameColumnAr: z.string().describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة العربية.").optional(),
  select2NameColumnEn: z.string().describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة الإنجليزية.").optional(),
  description: z.string().describe("وصف الجدول").optional(),
  category: z.string().min(1, { "message": "validation.string.nonempty" }).describe("تصنيف الجدول"),
  isActive: z.boolean().describe("هل الجدول مفعل؟"),
  isSystem: z.boolean().describe("هل الجدول خاص بالنظام؟")
});

export type TableManagerController_createRequestValidated = z.infer<typeof TableManagerController_createRequestSchema>;

/** Zod schema for {@link TableManagerController_findAllResponse}. */
export const TableManagerController_findAllResponseSchema = z.object({

});

export type TableManagerController_findAllResponseValidated = z.infer<typeof TableManagerController_findAllResponseSchema>;

/** Zod schema for {@link TableManagerController_updateRequest}. */
export const TableManagerController_updateRequestSchema = z.object({
  endpointName: z.string().describe("اسم الـ endpoint").optional(),
  displayName: z.string().describe("اسم العرض الظاهر للجدول").optional(),
  defaultLimit: z.number().describe("عدد العناصر الافتراضي لكل صفحة").optional(),
  typeViewActions: z.string().describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة العربية.").optional(),
  select2NameColumnAr: z.string().describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة العربية.").optional(),
  select2NameColumnEn: z.string().describe("اسم العمود الذي سيتم استخدامه كـ \"name\" في استجابة select2 للغة الإنجليزية.").optional(),
  description: z.string().describe("وصف الجدول").optional(),
  category: z.string().describe("تصنيف الجدول").optional(),
  isActive: z.boolean().describe("هل الجدول مفعل؟").optional(),
  isSystem: z.boolean().describe("هل الجدول خاص بالنظام؟").optional(),
  addColumns: z.array(z.string().min(1, { "message": "validation.string.nonempty" }).describe("...")).describe("قائمة بالأعمدة الجديدة فقط التي سيتم إضافتها للجدول.").optional()
});

export type TableManagerController_updateRequestValidated = z.infer<typeof TableManagerController_updateRequestSchema>;