/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $VerifyOtpDto = {
    properties: {
        phoneNumber: {
            type: 'string',
            description: `User phone number in international format`,
            isRequired: true,
        },
        otp: {
            type: 'string',
            description: `The 6-digit OTP code`,
            isRequired: true,
        },
    },
} as const;
