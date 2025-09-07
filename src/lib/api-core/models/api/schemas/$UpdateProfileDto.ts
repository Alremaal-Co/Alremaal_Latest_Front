/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UpdateProfileDto = {
    properties: {
        fullName: {
            type: 'string',
            description: `الاسم الكامل للمستخدم`,
        },
        email: {
            type: 'string',
            description: `البريد الإلكتروني للمستخدم (اختياري)`,
        },
        imageUrl: {
            type: 'string',
            description: `رابط الصورة الشخصية`,
        },
        country: {
            type: 'string',
            description: `الدولة التي يقيم بها المستخدم`,
        },
        language: {
            type: 'string',
            description: `اللغة المفضلة للمستخدم`,
        },
        role: {
            type: 'Enum',
        },
    },
} as const;
