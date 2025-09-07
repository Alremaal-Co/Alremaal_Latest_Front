/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateColumnDto = {
    /**
     * القيمة الجديدة لاسم العمود باللغة العربية (اختياري).
     */
    labelAr?: string;
    /**
     * القيمة الجديدة لاسم العمود باللغة الإنجليزية (اختياري).
     */
    labelEn?: string;
    /**
     * تحديد ما إذا كان يمكن أن تكون قيمة هذا العمود فارغة (اختياري).
     */
    isNullable?: boolean;
    /**
     * تحديد ما إذا كان يمكن البحث في هذا العمود (اختياري).
     */
    isSearchable?: boolean;
    /**
     * تحديد ما إذا كان يمكن فلترة البيانات بناءً على هذا العمود (اختياري).
     */
    isFilterable?: boolean;
    /**
     * تحديد ما إذا كان يمكن ترتيب البيانات بناءً على هذا العمود (اختياري).
     */
    isSortable?: boolean;
    /**
     * تحديد ما إذا كان سيتم عرض هذا العمود في استجابات API (اختياري).
     */
    isSelectable?: boolean;
    /**
     * الاسم البرمجي الجديد للعمود
     */
    columnName: string;
};

