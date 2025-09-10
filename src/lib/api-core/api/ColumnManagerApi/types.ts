// This file is auto-generated. Do not edit directly.

import type { ColumnManagerController_addColumnRequestDataTypeEnum } from './enums';

export interface ColumnManagerController_addColumnRequest {
  /** الاسم البرمجي للعمود (يُستخدم في قاعدة البيانات) */
  columnName: string;
  /** نوع بيانات العمود (مثل: text, varchar, integer...) */
  dataType: ColumnManagerController_addColumnRequestDataTypeEnum;
  /** الاسم الظاهر للعمود باللغة العربية */
  labelAr: string;
  /** الاسم الظاهر للعمود باللغة الإنجليزية */
  labelEn: string;
  /** هل يمكن أن تكون قيمة هذا العمود فارغة (NULL)؟ */
  isNullable?: boolean;
  /** هل يمكن البحث في هذا العمود؟ */
  isSearchable?: boolean;
  /** هل يمكن فلترة البيانات بناءً على هذا العمود؟ */
  isFilterable?: boolean;
  /** هل يمكن ترتيب البيانات بناءً على هذا العمود؟ */
  isSortable?: boolean;
  /** هل يمكن عرض هذا العمود في استجابات GET؟ */
  isSelectable?: boolean;
}

export interface ColumnManagerController_addColumnResponse {
}

export interface ColumnManagerController_deleteRelationResponse {
}

export interface ColumnManagerController_updateColumnRequest {
  /** القيمة الجديدة لاسم العمود باللغة العربية (اختياري). */
  labelAr?: string;
  /** القيمة الجديدة لاسم العمود باللغة الإنجليزية (اختياري). */
  labelEn?: string;
  /** تحديد ما إذا كان يمكن أن تكون قيمة هذا العمود فارغة (اختياري). */
  isNullable?: boolean;
  /** تحديد ما إذا كان يمكن البحث في هذا العمود (اختياري). */
  isSearchable?: boolean;
  /** تحديد ما إذا كان يمكن فلترة البيانات بناءً على هذا العمود (اختياري). */
  isFilterable?: boolean;
  /** تحديد ما إذا كان يمكن ترتيب البيانات بناءً على هذا العمود (اختياري). */
  isSortable?: boolean;
  /** تحديد ما إذا كان سيتم عرض هذا العمود في استجابات API (اختياري). */
  isSelectable?: boolean;
  /** الاسم البرمجي الجديد للعمود */
  columnName: string;
}