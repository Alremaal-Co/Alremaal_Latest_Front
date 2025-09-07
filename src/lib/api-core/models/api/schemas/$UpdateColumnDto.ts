/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateColumnDto = {
    properties: {
        labelAr: {
            type: 'string',
            description: `القيمة الجديدة لاسم العمود باللغة العربية (اختياري).`,
        },
        labelEn: {
            type: 'string',
            description: `القيمة الجديدة لاسم العمود باللغة الإنجليزية (اختياري).`,
        },
        isNullable: {
            type: 'boolean',
            description: `تحديد ما إذا كان يمكن أن تكون قيمة هذا العمود فارغة (اختياري).`,
        },
        isSearchable: {
            type: 'boolean',
            description: `تحديد ما إذا كان يمكن البحث في هذا العمود (اختياري).`,
        },
        isFilterable: {
            type: 'boolean',
            description: `تحديد ما إذا كان يمكن فلترة البيانات بناءً على هذا العمود (اختياري).`,
        },
        isSortable: {
            type: 'boolean',
            description: `تحديد ما إذا كان يمكن ترتيب البيانات بناءً على هذا العمود (اختياري).`,
        },
        isSelectable: {
            type: 'boolean',
            description: `تحديد ما إذا كان سيتم عرض هذا العمود في استجابات API (اختياري).`,
        },
        columnName: {
            type: 'string',
            description: `الاسم البرمجي الجديد للعمود`,
            isRequired: true,
        },
    },
} as const;
