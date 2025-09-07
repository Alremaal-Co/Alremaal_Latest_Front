/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AddColumnDto = {
    /**
     * الاسم البرمجي للعمود (يُستخدم في قاعدة البيانات)
     */
    columnName: string;
    /**
     * نوع بيانات العمود (مثل: text, varchar, integer...)
     */
    dataType: AddColumnDto.dataType;
    /**
     * الاسم الظاهر للعمود باللغة العربية
     */
    labelAr: string;
    /**
     * الاسم الظاهر للعمود باللغة الإنجليزية
     */
    labelEn: string;
    /**
     * هل يمكن أن تكون قيمة هذا العمود فارغة (NULL)؟
     */
    isNullable?: boolean;
    /**
     * هل يمكن البحث في هذا العمود؟
     */
    isSearchable?: boolean;
    /**
     * هل يمكن فلترة البيانات بناءً على هذا العمود؟
     */
    isFilterable?: boolean;
    /**
     * هل يمكن ترتيب البيانات بناءً على هذا العمود؟
     */
    isSortable?: boolean;
    /**
     * هل يمكن عرض هذا العمود في استجابات GET؟
     */
    isSelectable?: boolean;
};
export namespace AddColumnDto {
    /**
     * نوع بيانات العمود (مثل: text, varchar, integer...)
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

