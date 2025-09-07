/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginationMeta = {
    properties: {
        itemsPerPage: {
            type: 'number',
            description: `Number of items per page.`,
            isRequired: true,
        },
        totalItems: {
            type: 'number',
            description: `Total number of items available.`,
            isRequired: true,
        },
        currentPage: {
            type: 'number',
            description: `The current page number.`,
            isRequired: true,
        },
        totalPages: {
            type: 'number',
            description: `Total number of pages available.`,
            isRequired: true,
        },
        search: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
            isRequired: true,
            isNullable: true,
        },
        select: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
        filter: {
            type: 'array',
            contains: {
                type: 'FilterConditionDto',
            },
        },
    },
} as const;
