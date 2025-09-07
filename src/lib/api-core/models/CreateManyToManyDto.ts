/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateManyToManyDto = {
    /**
     * اسم الجدول الأول في العلاقة (مثل: property_requests)
     */
    tableA: string;
    /**
     * اسم الجدول الثاني في العلاقة (مثل: districts)
     */
    tableB: string;
    /**
     * اسم الجدول الوسيط الذي سيتم إنشاؤه لربط الجدولين
     */
    junctionTableName: string;
};

