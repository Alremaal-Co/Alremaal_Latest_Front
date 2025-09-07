/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CompleteProfileDto = {
    properties: {
        fullNameAr: {
            type: 'string',
            description: `Full name in Arabic`,
            isRequired: true,
        },
        fullNameEn: {
            type: 'string',
            description: `Full name in English`,
            isRequired: true,
        },
        email: {
            type: 'string',
            description: `User email (optional)`,
        },
        city: {
            type: 'string',
            description: `City`,
            isRequired: true,
        },
        country: {
            type: 'string',
            description: `Country Code (e.g., SA, AE)`,
            isRequired: true,
        },
        language: {
            type: 'string',
            description: `Preferred language (ar/en)`,
            isRequired: true,
        },
        role: {
            type: 'Enum',
            isRequired: true,
        },
    },
} as const;
