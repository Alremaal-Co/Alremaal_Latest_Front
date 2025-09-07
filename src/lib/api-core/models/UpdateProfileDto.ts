/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateProfileDto = {
    /**
     * الاسم الكامل للمستخدم
     */
    fullName?: string;
    /**
     * البريد الإلكتروني للمستخدم (اختياري)
     */
    email?: string;
    /**
     * رابط الصورة الشخصية
     */
    imageUrl?: string;
    /**
     * الدولة التي يقيم بها المستخدم
     */
    country?: string;
    /**
     * اللغة المفضلة للمستخدم
     */
    language?: string;
    /**
     * تحديد نوع الحساب الأساسي للمستخدم
     */
    role?: UpdateProfileDto.role;
};
export namespace UpdateProfileDto {
    /**
     * تحديد نوع الحساب الأساسي للمستخدم
     */
    export enum role {
        PROPERTY_OWNER = 'PROPERTY_OWNER',
        REAL_ESTATE_AGENT = 'REAL_ESTATE_AGENT',
        REAL_ESTATE_DEVELOPER = 'REAL_ESTATE_DEVELOPER',
        PROPERTY_SEEKER = 'PROPERTY_SEEKER',
        FINANCING_SEEKER = 'FINANCING_SEEKER',
        BANK_EMPLOYEE = 'BANK_EMPLOYEE',
    }
}

