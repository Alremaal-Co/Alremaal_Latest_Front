// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { ColumnManagerController_addColumnRequest, ColumnManagerController_updateColumnRequest } from './types';

export const columnManagerEndpoints = {
  /**
   * GET /api/v1/tables/columns/{endpointName}
   * Get all columns for a specific table
   */
  getColumns: (params: { endpointName: string | number }) => ({
    action: 'getColumns' as const,
    pathParams: params,
  }),

  /**
   * POST /api/v1/tables/columns/{endpointName}
   * Add a new column to a table
   */
  addColumn: (params: { endpointName: string | number }, body: ColumnManagerController_addColumnRequest) => ({
    action: 'addColumn' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/tables/columns/{endpointName}/{columnName}
   * Delete a column from a table (irreversible)
   */
  deleteColumn: (params: { endpointName: string | number; columnName: string | number }) => ({
    action: 'deleteColumn' as const,
    pathParams: params,
  }),

  /**
   * PATCH /api/v1/tables/columns/{endpointName}/{columnName}
   * Update a column's metadata
   */
  updateColumn: (params: { endpointName: string | number; columnName: string | number }, body: ColumnManagerController_updateColumnRequest) => ({
    action: 'updateColumn' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/tables/columns/{endpointName}/{columnName}/link
   * Delete a foreign key relationship from a column
   */
  deleteRelation: (params: { endpointName: string | number; columnName: string | number }) => ({
    action: 'deleteRelation' as const,
    pathParams: params,
  }),

  /**
   * POST /api/v1/tables/columns/{endpointName}/{columnName}/clear
   * Clear all values in a column (sets them to NULL)
   */
  clearColumnValues: (params: { endpointName: string | number; columnName: string | number }) => ({
    action: 'clearColumnValues' as const,
    pathParams: params,
  }),

};