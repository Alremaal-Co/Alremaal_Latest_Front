/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BulkDeleteDto } from '../../BulkDeleteDto';
import type { BulkRestoreDto } from '../../BulkRestoreDto';
import type { CreateItemDto } from '../../CreateItemDto';
import type { PaginatedData } from '../../PaginatedData';
import type { Select2Item } from '../../Select2Item';
import type { UpdateItemDto } from '../../UpdateItemDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DynamicDataOperationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Data in Select2 Format
     * @returns Select2Item An array of items formatted for Select2.
     * @throws ApiError
     */
    public dynamicDataControllerFindForSelect2V1({
        endpointName,
        search,
        limit = 50,
        page = 1,
    }: {
        /**
         * The unique identifier of the target table.
         */
        endpointName: string,
        /**
         * A search term to filter the results.
         */
        search?: string,
        /**
         * The maximum number of items per page.
         */
        limit?: number,
        /**
         * The page number to retrieve for lazy loading.
         */
        page?: number,
    }): CancelablePromise<Array<Select2Item>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dynamic/{endpointName}/select2',
            path: {
                'endpointName': endpointName,
            },
            query: {
                'search': search,
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `The endpoint is not configured for Select2.`,
            },
        });
    }
    /**
     * Get Values for a Relational Column
     * @returns Select2Item An array of items from the related table, formatted for Select2.
     * @throws ApiError
     */
    public dynamicDataControllerFindColumnValuesV1({
        endpointName,
        columnName,
        search,
        limit = 50,
        page = 1,
    }: {
        /**
         * The table containing the relational column.
         */
        endpointName: string,
        /**
         * The name of the relational column.
         */
        columnName: string,
        /**
         * A search term to filter the results.
         */
        search?: string,
        /**
         * The maximum number of items per page.
         */
        limit?: number,
        /**
         * The page number to retrieve for lazy loading.
         */
        page?: number,
    }): CancelablePromise<Array<Select2Item>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dynamic/{endpointName}/columns/{columnName}/select2',
            path: {
                'endpointName': endpointName,
                'columnName': columnName,
            },
            query: {
                'search': search,
                'limit': limit,
                'page': page,
            },
            errors: {
                400: `The specified column is not a valid relation.`,
            },
        });
    }
    /**
     * Retrieve a Paginated List of Soft-Deleted Items (Trash)
     * Fetches a list of items that have been soft-deleted. This is useful for "trash can" or "recycle bin" functionality.
     * @returns PaginatedData Paginated list of soft-deleted items.
     * @throws ApiError
     */
    public dynamicDataControllerFindInTrashV1({
        endpointName,
        output = 'pagination',
        page = 1,
        limit = 10,
        search,
        select,
        filter,
        sortBy,
        relations,
    }: {
        /**
         * The unique identifier of the target table.
         */
        endpointName: string,
        /**
         * The desired output format for the data.
         */
        output?: 'pagination' | 'geojson' | 'select2',
        /**
         * The page number to retrieve.
         */
        page?: number,
        /**
         * The number of items to return per page.
         */
        limit?: number,
        /**
         * A general search term to query across all searchable fields.
         */
        search?: string,
        /**
         * A comma-separated list of columns to include in the response (e.g., id,name,createdAt).
         */
        select?: Array<string>,
        /**
         * An array of dynamic filter conditions (JSON string format).
         */
        filter?: string,
        /**
         * Dynamic sorting criteria (e.g., "name:ASC" or "createdAt:DESC").
         */
        sortBy?: string,
        /**
         * An array of relation-loading conditions (JSON string format).
         */
        relations?: string,
    }): CancelablePromise<PaginatedData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dynamic/{endpointName}/trash',
            path: {
                'endpointName': endpointName,
            },
            query: {
                'output': output,
                'page': page,
                'limit': limit,
                'search': search,
                'select': select,
                'filter': filter,
                'sortBy': sortBy,
                'relations': relations,
            },
        });
    }
    /**
     * Retrieve a Paginated List of Active Items
     * @returns PaginatedData Paginated list of active items retrieved successfully.
     * @throws ApiError
     */
    public dynamicDataControllerFindAllV1({
        endpointName,
        output = 'pagination',
        page = 1,
        limit = 10,
        search,
        select,
        filter,
        sortBy,
        relations,
    }: {
        /**
         * The unique identifier of the target table.
         */
        endpointName: string,
        /**
         * The desired output format for the data.
         */
        output?: 'pagination' | 'geojson' | 'select2',
        /**
         * The page number to retrieve.
         */
        page?: number,
        /**
         * The number of items to return per page.
         */
        limit?: number,
        /**
         * A general search term to query across all searchable fields.
         */
        search?: string,
        /**
         * A comma-separated list of columns to include in the response (e.g., id,name,createdAt).
         */
        select?: Array<string>,
        /**
         * An array of dynamic filter conditions (JSON string format).
         */
        filter?: string,
        /**
         * Dynamic sorting criteria (e.g., "name:ASC" or "createdAt:DESC").
         */
        sortBy?: string,
        /**
         * An array of relation-loading conditions (JSON string format).
         */
        relations?: string,
    }): CancelablePromise<PaginatedData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dynamic/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            query: {
                'output': output,
                'page': page,
                'limit': limit,
                'search': search,
                'select': select,
                'filter': filter,
                'sortBy': sortBy,
                'relations': relations,
            },
        });
    }
    /**
     * Create a New Item
     * @returns any The item was created successfully.
     * @throws ApiError
     */
    public dynamicDataControllerCreateV1({
        endpointName,
        requestBody,
    }: {
        endpointName: string,
        requestBody: CreateItemDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dynamic/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve a Single Item by ID
     * @returns any The requested item was found and returned.
     * @throws ApiError
     */
    public dynamicDataControllerFindOneV1({
        endpointName,
        id,
    }: {
        /**
         * The unique identifier of the target table.
         */
        endpointName: string,
        /**
         * The UUID of the item to retrieve.
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/dynamic/{endpointName}/{id}',
            path: {
                'endpointName': endpointName,
                'id': id,
            },
            errors: {
                404: `An item with the specified ID was not found.`,
            },
        });
    }
    /**
     * Update an Existing Item
     * @returns any The item was updated successfully.
     * @throws ApiError
     */
    public dynamicDataControllerUpdateV1({
        endpointName,
        id,
        requestBody,
    }: {
        endpointName: string,
        id: string,
        requestBody: UpdateItemDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/dynamic/{endpointName}/{id}',
            path: {
                'endpointName': endpointName,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Permanently Delete a Single Item
     * @returns void
     * @throws ApiError
     */
    public dynamicDataControllerRemoveV1({
        endpointName,
        id,
    }: {
        endpointName: string,
        id: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/dynamic/{endpointName}/{id}',
            path: {
                'endpointName': endpointName,
                'id': id,
            },
        });
    }
    /**
     * Soft Delete a Single Item
     * @returns void
     * @throws ApiError
     */
    public dynamicDataControllerSoftRemoveV1({
        endpointName,
        id,
    }: {
        endpointName: string,
        id: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/dynamic/{endpointName}/{id}/soft-delete',
            path: {
                'endpointName': endpointName,
                'id': id,
            },
        });
    }
    /**
     * Restore a Soft-Deleted Item
     * @returns any The item was successfully restored.
     * @throws ApiError
     */
    public dynamicDataControllerRestoreV1({
        endpointName,
        id,
    }: {
        endpointName: string,
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dynamic/{endpointName}/{id}/restore',
            path: {
                'endpointName': endpointName,
                'id': id,
            },
        });
    }
    /**
     * Soft Delete Multiple Items in Bulk
     * @returns any Returns the number of items successfully soft-deleted.
     * @throws ApiError
     */
    public dynamicDataControllerBulkSoftRemoveV1({
        endpointName,
        requestBody,
    }: {
        endpointName: string,
        requestBody: BulkDeleteDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dynamic/{endpointName}/bulk/soft-delete',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Restore Multiple Items in Bulk
     * @returns any Returns the number of items successfully restored.
     * @throws ApiError
     */
    public dynamicDataControllerBulkRestoreV1({
        endpointName,
        requestBody,
    }: {
        endpointName: string,
        requestBody: BulkRestoreDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dynamic/{endpointName}/bulk/restore',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Permanently Delete Multiple Items in Bulk
     * @returns any Returns the number of items successfully deleted.
     * @throws ApiError
     */
    public dynamicDataControllerBulkRemoveV1({
        endpointName,
        requestBody,
    }: {
        endpointName: string,
        requestBody: BulkDeleteDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/dynamic/{endpointName}/bulk/delete',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
