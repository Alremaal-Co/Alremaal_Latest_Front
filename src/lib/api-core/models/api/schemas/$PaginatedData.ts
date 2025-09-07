/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedData = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'dictionary',
                contains: {
                    properties: {
                    },
                },
            },
            isRequired: true,
        },
        meta: {
            type: 'all-of',
            description: `Metadata about the pagination.`,
            contains: [{
                type: 'PaginationMeta',
            }],
            isRequired: true,
        },
        links: {
            type: 'all-of',
            description: `Links to navigate through the pages.`,
            contains: [{
                type: 'PaginationLinks',
            }],
            isRequired: true,
        },
        fildes: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
    },
} as const;
