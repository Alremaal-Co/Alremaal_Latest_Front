// This file is auto-generated. Do not edit directly.

import type { TableManagerController_createOneToManyRelationRequestOnDeleteActionEnum, TableManagerController_createOneToOneRelationRequestOnDeleteActionEnum } from './enums';

export interface TableManagerController_createManyToManyRelationRequest {
  /** اسم الجدول الأول في العلاقة (مثل: property_requests) */
  tableA: string;
  /** اسم الجدول الثاني في العلاقة (مثل: districts) */
  tableB: string;
  /** اسم الجدول الوسيط الذي سيتم إنشاؤه لربط الجدولين */
  junctionTableName: string;
}

export interface TableManagerController_createOneToManyRelationRequest {
  /** الجدول الذي سيحتوي على سجلات "المتعدد" (مثل: districts) */
  manySideTable: string;
  /** الجدول الذي سيحتوي على سجل "الواحد" (مثل: cities) */
  oneSideTable: string;
  /** اسم عمود العلاقة في جدول "المتعدد" */
  relationColumnName: string;
  /** ماذا يحدث عند حذف سجل من جانب "الواحد" */
  onDeleteAction: TableManagerController_createOneToManyRelationRequestOnDeleteActionEnum;
}

export interface TableManagerController_createOneToOneRelationRequest {
  /** الجدول الرئيسي (مثل: users) */
  primaryTable: string;
  /** الجدول التابع الذي سيحتوي على المفتاح الأجنبي (مثل: profiles) */
  dependentTable: string;
  /** اسم عمود العلاقة في الجدول التابع */
  relationColumnName: string;
  /** ماذا يحدث عند حذف سجل من الجدول الرئيسي (الافتراضي هو حذف السجل التابع) */
  onDeleteAction: TableManagerController_createOneToOneRelationRequestOnDeleteActionEnum;
}

export interface TableManagerController_createRequest {
  /** اسم الـ endpoint */
  endpointName: string;
  /** اسم العرض الظاهر للجدول */
  displayName: string;
  /** عدد العناصر الافتراضي لكل صفحة */
  defaultLimit: number;
  /** تعريف الأعمدة الخاصة بالجدول */
  columns: string[];
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية. */
  typeViewActions: string;
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية. */
  select2NameColumnAr?: string;
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة الإنجليزية. */
  select2NameColumnEn?: string;
  /** وصف الجدول */
  description?: string;
  /** تصنيف الجدول */
  category: string;
  /** هل الجدول مفعل؟ */
  isActive: boolean;
  /** هل الجدول خاص بالنظام؟ */
  isSystem: boolean;
}

export interface TableManagerController_findAllResponse {
  data:any
}

export interface TableManagerController_updateRequest {
  /** اسم الـ endpoint */
  endpointName?: string;
  /** اسم العرض الظاهر للجدول */
  displayName?: string;
  /** عدد العناصر الافتراضي لكل صفحة */
  defaultLimit?: number;
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية. */
  typeViewActions?: string;
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية. */
  select2NameColumnAr?: string;
  /** اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة الإنجليزية. */
  select2NameColumnEn?: string;
  /** وصف الجدول */
  description?: string;
  /** تصنيف الجدول */
  category?: string;
  /** هل الجدول مفعل؟ */
  isActive?: boolean;
  /** هل الجدول خاص بالنظام؟ */
  isSystem?: boolean;
  /** قائمة بالأعمدة الجديدة فقط التي سيتم إضافتها للجدول. */
  addColumns?: string[];
}