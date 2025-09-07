/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateManyToManyDto = {
    properties: {
        tableA: {
            type: 'string',
            description: `اسم الجدول الأول في العلاقة (مثل: property_requests)`,
            isRequired: true,
        },
        tableB: {
            type: 'string',
            description: `اسم الجدول الثاني في العلاقة (مثل: districts)`,
            isRequired: true,
        },
        junctionTableName: {
            type: 'string',
            description: `اسم الجدول الوسيط الذي سيتم إنشاؤه لربط الجدولين`,
            isRequired: true,
        },
    },
} as const;
