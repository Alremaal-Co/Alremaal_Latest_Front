/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BulkDeleteDto = {
    properties: {
        ids: {
            type: 'array',
            contains: {
                type: 'string',
                format: 'uuid',
            },
            isRequired: true,
        },
    },
} as const;
