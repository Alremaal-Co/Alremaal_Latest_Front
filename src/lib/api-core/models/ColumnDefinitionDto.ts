/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ColumnDefinitionDto = {
    /**
     * ...
     */
    columnName: string;
    /**
     * نوع البيانات لهذا العمود
     */
    dataType: ColumnDefinitionDto.dataType;
    /**
     * عنوان العمود باللغة العربية
     */
    labelAr: string;
    /**
     * عنوان العمود باللغة الإنجليزية
     */
    labelEn: string;
    /**
     * أقل قيمة مسموح بها لهذا العمود
     */
    min: number;
    /**
     * أقصى قيمة مسموح بها لهذا العمود
     */
    max: number;
    /**
     * هل العمود يمكن أن يكون فارغًا؟
     */
    isNullable?: boolean;
    /**
     * هل العمود قابل للبحث؟
     */
    isSearchable?: boolean;
    /**
     * هل العمود قابل للتصفية؟
     */
    isFilterable?: boolean;
    /**
     * هل يمكن ترتيب العمود؟
     */
    isSortable?: boolean;
    /**
     * هل يمكن عرض العمود في نتائج GET؟
     */
    isSelectable?: boolean;
    /**
     * هل هذا العمود فريد في الجدول؟
     */
    isUnique?: boolean;
};
export namespace ColumnDefinitionDto {
    /**
     * نوع البيانات لهذا العمود
     */
    export enum dataType {
        TEXT = 'text',
        VARCHAR = 'varchar',
        INTEGER = 'integer',
        BIGINT = 'bigint',
        NUMERIC = 'numeric',
        SERIAL = 'serial',
        BIGSERIAL = 'bigserial',
        BOOLEAN = 'boolean',
        DATE = 'date',
        TIMESTAMP_WITH_TIME_ZONE = 'timestamp with time zone',
        JSONB = 'jsonb',
        UUID = 'uuid',
        TEXT_ = 'text[]',
        ENUM = 'enum',
    }
}

