/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AddColumnDto = {
    properties: {
        columnName: {
            type: 'string',
            description: `الاسم البرمجي للعمود (يُستخدم في قاعدة البيانات)`,
            isRequired: true,
        },
        dataType: {
            type: 'Enum',
            isRequired: true,
        },
        labelAr: {
            type: 'string',
            description: `الاسم الظاهر للعمود باللغة العربية`,
            isRequired: true,
        },
        labelEn: {
            type: 'string',
            description: `الاسم الظاهر للعمود باللغة الإنجليزية`,
            isRequired: true,
        },
        isNullable: {
            type: 'boolean',
            description: `هل يمكن أن تكون قيمة هذا العمود فارغة (NULL)؟`,
        },
        isSearchable: {
            type: 'boolean',
            description: `هل يمكن البحث في هذا العمود؟`,
        },
        isFilterable: {
            type: 'boolean',
            description: `هل يمكن فلترة البيانات بناءً على هذا العمود؟`,
        },
        isSortable: {
            type: 'boolean',
            description: `هل يمكن ترتيب البيانات بناءً على هذا العمود؟`,
        },
        isSelectable: {
            type: 'boolean',
            description: `هل يمكن عرض هذا العمود في استجابات GET؟`,
        },
    },
} as const;
