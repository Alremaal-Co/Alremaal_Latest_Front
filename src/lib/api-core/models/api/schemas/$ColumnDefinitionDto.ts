/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ColumnDefinitionDto = {
    properties: {
        columnName: {
            type: 'string',
            description: `...`,
            isRequired: true,
        },
        dataType: {
            type: 'Enum',
            isRequired: true,
        },
        labelAr: {
            type: 'string',
            description: `عنوان العمود باللغة العربية`,
            isRequired: true,
        },
        labelEn: {
            type: 'string',
            description: `عنوان العمود باللغة الإنجليزية`,
            isRequired: true,
        },
        min: {
            type: 'number',
            description: `أقل قيمة مسموح بها لهذا العمود`,
            isRequired: true,
        },
        max: {
            type: 'number',
            description: `أقصى قيمة مسموح بها لهذا العمود`,
            isRequired: true,
        },
        isNullable: {
            type: 'boolean',
            description: `هل العمود يمكن أن يكون فارغًا؟`,
        },
        isSearchable: {
            type: 'boolean',
            description: `هل العمود قابل للبحث؟`,
        },
        isFilterable: {
            type: 'boolean',
            description: `هل العمود قابل للتصفية؟`,
        },
        isSortable: {
            type: 'boolean',
            description: `هل يمكن ترتيب العمود؟`,
        },
        isSelectable: {
            type: 'boolean',
            description: `هل يمكن عرض العمود في نتائج GET؟`,
        },
        isUnique: {
            type: 'boolean',
            description: `هل هذا العمود فريد في الجدول؟`,
        },
    },
} as const;
