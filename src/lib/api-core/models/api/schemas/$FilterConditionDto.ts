/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $FilterConditionDto = {
    properties: {
        field: {
            type: 'string',
            description: `The name of the field to apply the filter on.`,
            isRequired: true,
        },
        operator: {
            type: 'Enum',
            isRequired: true,
        },
        value: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
    },
} as const;
