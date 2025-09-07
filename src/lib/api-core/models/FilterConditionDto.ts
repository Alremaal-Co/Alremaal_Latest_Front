/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FilterConditionDto = {
    /**
     * The name of the field to apply the filter on.
     */
    field: string;
    /**
     * The comparison operator to use for the filter.
     */
    operator: FilterConditionDto.operator;
    /**
     * The value to compare against. Not required for `isNull` or `isNotNull` operators. For `in`/`notIn`, provide a comma-separated string or an array.
     */
    value?: Record<string, any>;
};
export namespace FilterConditionDto {
    /**
     * The comparison operator to use for the filter.
     */
    export enum operator {
        EQ = 'eq',
        NEQ = 'neq',
        GT = 'gt',
        GTE = 'gte',
        LT = 'lt',
        LTE = 'lte',
        LIKE = 'like',
        IN = 'in',
        NOT_IN = 'notIn',
        IS_NULL = 'isNull',
        IS_NOT_NULL = 'isNotNull',
    }
}

