/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ColumnDefinitionDto } from './ColumnDefinitionDto';
export type CreateTableDto = {
    /**
     * اسم الـ endpoint
     */
    endpointName: string;
    /**
     * اسم العرض الظاهر للجدول
     */
    displayName: string;
    /**
     * عدد العناصر الافتراضي لكل صفحة
     */
    defaultLimit: number;
    /**
     * تعريف الأعمدة الخاصة بالجدول
     */
    columns: Array<ColumnDefinitionDto>;
    /**
     * اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية.
     */
    typeViewActions: string;
    /**
     * اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية.
     */
    select2NameColumnAr?: string;
    /**
     * اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة الإنجليزية.
     */
    select2NameColumnEn?: string;
    /**
     * وصف الجدول
     */
    description?: string;
    /**
     * تصنيف الجدول
     */
    category: string;
    /**
     * هل الجدول مفعل؟
     */
    isActive: boolean;
    /**
     * هل الجدول خاص بالنظام؟
     */
    isSystem: boolean;
};

