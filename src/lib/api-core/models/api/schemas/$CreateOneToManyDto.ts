/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreateOneToManyDto = {
    properties: {
        manySideTable: {
            type: 'string',
            description: `الجدول الذي سيحتوي على سجلات "المتعدد" (مثل: districts)`,
            isRequired: true,
        },
        oneSideTable: {
            type: 'string',
            description: `الجدول الذي سيحتوي على سجل "الواحد" (مثل: cities)`,
            isRequired: true,
        },
        relationColumnName: {
            type: 'string',
            description: `اسم عمود العلاقة في جدول "المتعدد"`,
            isRequired: true,
        },
        onDeleteAction: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;
