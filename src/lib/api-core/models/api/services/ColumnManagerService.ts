/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddColumnDto } from '../../AddColumnDto';
import type { DynamicColumn } from '../../DynamicColumn';
import type { UpdateColumnDto } from '../../UpdateColumnDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ColumnManagerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all columns for a specific table
     * @returns any Columns retrieved successfully.
     * @throws ApiError
     */
    public columnManagerControllerGetColumnsV1({
        endpointName,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tables/columns/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            errors: {
                404: `Table not found.`,
            },
        });
    }
    /**
     * Add a new column to a table
     * @returns DynamicColumn Column added successfully.
     * @throws ApiError
     */
    public columnManagerControllerAddColumnV1({
        endpointName,
        requestBody,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
        requestBody: AddColumnDto,
    }): CancelablePromise<DynamicColumn> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables/columns/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a column from a table (irreversible)
     * @returns void
     * @throws ApiError
     */
    public columnManagerControllerDeleteColumnV1({
        endpointName,
        columnName,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
        /**
         * The name of the column to delete
         */
        columnName: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/tables/columns/{endpointName}/{columnName}',
            path: {
                'endpointName': endpointName,
                'columnName': columnName,
            },
        });
    }
    /**
     * Update a column's metadata
     * @returns any
     * @throws ApiError
     */
    public columnManagerControllerUpdateColumnV1({
        endpointName,
        columnName,
        requestBody,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
        /**
         * The name of the column to update
         */
        columnName: string,
        requestBody: UpdateColumnDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/tables/columns/{endpointName}/{columnName}',
            path: {
                'endpointName': endpointName,
                'columnName': columnName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a foreign key relationship from a column
     * @returns DynamicColumn Relationship removed successfully.
     * @throws ApiError
     */
    public columnManagerControllerDeleteRelationV1({
        endpointName,
        columnName,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
        columnName: string,
    }): CancelablePromise<DynamicColumn> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/tables/columns/{endpointName}/{columnName}/link',
            path: {
                'endpointName': endpointName,
                'columnName': columnName,
            },
        });
    }
    /**
     * Clear all values in a column (sets them to NULL)
     * @returns any
     * @throws ApiError
     */
    public columnManagerControllerClearColumnValuesV1({
        endpointName,
        columnName,
    }: {
        /**
         * The endpoint name of the target table
         */
        endpointName: string,
        columnName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables/columns/{endpointName}/{columnName}/clear',
            path: {
                'endpointName': endpointName,
                'columnName': columnName,
            },
        });
    }
}
