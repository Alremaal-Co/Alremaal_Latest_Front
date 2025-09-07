/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginationLinks = {
    properties: {
        first: {
            type: 'string',
            description: `Link to the first page.`,
            isRequired: true,
            isNullable: true,
        },
        previous: {
            type: 'string',
            description: `Link to the previous page.`,
            isRequired: true,
            isNullable: true,
        },
        current: {
            type: 'string',
            description: `Link to the current page.`,
            isRequired: true,
        },
        next: {
            type: 'string',
            description: `Link to the next page.`,
            isRequired: true,
            isNullable: true,
        },
        last: {
            type: 'string',
            description: `Link to the last page.`,
            isRequired: true,
            isNullable: true,
        },
    },
} as const;
