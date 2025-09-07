/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateOneToOneDto = {
    /**
     * الجدول الرئيسي (مثل: users)
     */
    primaryTable: string;
    /**
     * الجدول التابع الذي سيحتوي على المفتاح الأجنبي (مثل: profiles)
     */
    dependentTable: string;
    /**
     * اسم عمود العلاقة في الجدول التابع
     */
    relationColumnName: string;
    /**
     * ماذا يحدث عند حذف سجل من الجدول الرئيسي (الافتراضي هو حذف السجل التابع)
     */
    onDeleteAction: CreateOneToOneDto.onDeleteAction;
};
export namespace CreateOneToOneDto {
    /**
     * ماذا يحدث عند حذف سجل من الجدول الرئيسي (الافتراضي هو حذف السجل التابع)
     */
    export enum onDeleteAction {
        CASCADE = 'CASCADE',
        RESTRICT = 'RESTRICT',
    }
}

