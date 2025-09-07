/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterConditionDto } from './FilterConditionDto';
export type PaginationMeta = {
    /**
     * Number of items per page.
     */
    itemsPerPage: number;
    /**
     * Total number of items available.
     */
    totalItems: number;
    /**
     * The current page number.
     */
    currentPage: number;
    /**
     * Total number of pages available.
     */
    totalPages: number;
    /**
     * The search term used for the query.
     */
    search: Record<string, any> | null;
    /**
     * Fields selected in the query.
     */
    select?: Array<string>;
    /**
     * Filters applied to the query.
     */
    filter?: Array<FilterConditionDto>;
};

