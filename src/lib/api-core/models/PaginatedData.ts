/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationLinks } from './PaginationLinks';
import type { PaginationMeta } from './PaginationMeta';
export type PaginatedData = {
    /**
     * Array of data items for the current page.
     */
    data: Array<Record<string, any>>;
    /**
     * Metadata about the pagination.
     */
    meta: PaginationMeta;
    /**
     * Links to navigate through the pages.
     */
    links: PaginationLinks;
    /**
     * Localized field labels and metadata for UI rendering.
     */
    fildes?: Record<string, any>;
};

