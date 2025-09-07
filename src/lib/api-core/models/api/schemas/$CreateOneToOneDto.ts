/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateOneToOneDto = {
    properties: {
        primaryTable: {
            type: 'string',
            description: `الجدول الرئيسي (مثل: users)`,
            isRequired: true,
        },
        dependentTable: {
            type: 'string',
            description: `الجدول التابع الذي سيحتوي على المفتاح الأجنبي (مثل: profiles)`,
            isRequired: true,
        },
        relationColumnName: {
            type: 'string',
            description: `اسم عمود العلاقة في الجدول التابع`,
            isRequired: true,
        },
        onDeleteAction: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;
