/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateTableDto = {
    properties: {
        endpointName: {
            type: 'string',
            description: `اسم الـ endpoint`,
        },
        displayName: {
            type: 'string',
            description: `اسم العرض الظاهر للجدول`,
        },
        defaultLimit: {
            type: 'number',
            description: `عدد العناصر الافتراضي لكل صفحة`,
        },
        typeViewActions: {
            type: 'string',
            description: `اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية.`,
        },
        select2NameColumnAr: {
            type: 'string',
            description: `اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية.`,
        },
        select2NameColumnEn: {
            type: 'string',
            description: `اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة الإنجليزية.`,
        },
        description: {
            type: 'string',
            description: `وصف الجدول`,
        },
        category: {
            type: 'string',
            description: `تصنيف الجدول`,
        },
        isActive: {
            type: 'boolean',
            description: `هل الجدول مفعل؟`,
        },
        isSystem: {
            type: 'boolean',
            description: `هل الجدول خاص بالنظام؟`,
        },
        addColumns: {
            type: 'array',
            contains: {
                type: 'ColumnDefinitionDto',
            },
        },
    },
} as const;
