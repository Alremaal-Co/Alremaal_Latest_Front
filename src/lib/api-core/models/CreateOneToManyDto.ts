/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateOneToManyDto = {
    /**
     * الجدول الذي سيحتوي على سجلات "المتعدد" (مثل: districts)
     */
    manySideTable: string;
    /**
     * الجدول الذي سيحتوي على سجل "الواحد" (مثل: cities)
     */
    oneSideTable: string;
    /**
     * اسم عمود العلاقة في جدول "المتعدد"
     */
    relationColumnName: string;
    /**
     * ماذا يحدث عند حذف سجل من جانب "الواحد"
     */
    onDeleteAction: CreateOneToManyDto.onDeleteAction;
};
export namespace CreateOneToManyDto {
    /**
     * ماذا يحدث عند حذف سجل من جانب "الواحد"
     */
    export enum onDeleteAction {
        SET_NULL = 'SET NULL',
        CASCADE = 'CASCADE',
        RESTRICT = 'RESTRICT',
    }
}

