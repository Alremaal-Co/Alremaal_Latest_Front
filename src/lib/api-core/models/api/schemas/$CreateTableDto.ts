/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateTableDto = {
    properties: {
        endpointName: {
            type: 'string',
            description: `اسم الـ endpoint`,
            isRequired: true,
        },
        displayName: {
            type: 'string',
            description: `اسم العرض الظاهر للجدول`,
            isRequired: true,
        },
        defaultLimit: {
            type: 'number',
            description: `عدد العناصر الافتراضي لكل صفحة`,
            isRequired: true,
        },
        columns: {
            type: 'array',
            contains: {
                type: 'ColumnDefinitionDto',
            },
            isRequired: true,
        },
        typeViewActions: {
            type: 'string',
            description: `اسم العمود الذي سيتم استخدامه كـ "name" في استجابة select2 للغة العربية.`,
            isRequired: true,
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
            isRequired: true,
        },
        isActive: {
            type: 'boolean',
            description: `هل الجدول مفعل؟`,
            isRequired: true,
        },
        isSystem: {
            type: 'boolean',
            description: `هل الجدول خاص بالنظام؟`,
            isRequired: true,
        },
    },
} as const;
