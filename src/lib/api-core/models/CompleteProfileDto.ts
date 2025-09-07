/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CompleteProfileDto = {
    /**
     * Full name in Arabic
     */
    fullNameAr: string;
    /**
     * Full name in English
     */
    fullNameEn: string;
    /**
     * User email (optional)
     */
    email?: string;
    /**
     * City
     */
    city: string;
    /**
     * Country Code (e.g., SA, AE)
     */
    country: string;
    /**
     * Preferred language (ar/en)
     */
    language: string;
    /**
     * The primary role of the user
     */
    role: CompleteProfileDto.role;
};
export namespace CompleteProfileDto {
    /**
     * The primary role of the user
     */
    export enum role {
        PROPERTY_OWNER = 'PROPERTY_OWNER',
        REAL_ESTATE_AGENT = 'REAL_ESTATE_AGENT',
        REAL_ESTATE_DEVELOPER = 'REAL_ESTATE_DEVELOPER',
        PROPERTY_SEEKER = 'PROPERTY_SEEKER',
        FINANCING_SEEKER = 'FINANCING_SEEKER',
        BANK_EMPLOYEE = 'BANK_EMPLOYEE',
        ADMIN = 'ADMIN',
        EDITOR = 'EDITOR',
        VIEWER = 'VIEWER',
        MANAGER = 'MANAGER',
        OWNER = 'OWNER',
        SUPER_USER = 'SUPER_USER',
    }
}

