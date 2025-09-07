// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { DynamicDataController_createRequest, DynamicDataController_updateRequest, DynamicDataController_bulkSoftRemoveRequest, DynamicDataController_bulkRestoreRequest, DynamicDataController_bulkRemoveRequest } from './types';

export const dynamicDataOperationsEndpoints = {
  /**
   * GET /api/v1/dynamic/{endpointName}/select2
   * Get Data in Select2 Format
   */
  findForSelect2: (params: { endpointName: string | number }, query?: QueryOptions) => ({
    action: 'findForSelect2' as const,
    pathParams: params,
    input: query,
  }),

  /**
   * GET /api/v1/dynamic/{endpointName}/columns/{columnName}/select2
   * Get Values for a Relational Column
   */
  findColumnValues: (params: { endpointName: string | number; columnName: string | number }, query?: QueryOptions) => ({
    action: 'findColumnValues' as const,
    pathParams: params,
    input: query,
  }),

  /**
   * GET /api/v1/dynamic/{endpointName}/trash
   * Retrieve a Paginated List of Soft-Deleted Items (Trash)
   */
  findInTrash: (params: { endpointName: string | number }, query?: QueryOptions) => ({
    action: 'findInTrash' as const,
    pathParams: params,
    input: query,
  }),

  /**
   * GET /api/v1/dynamic/{endpointName}
   * Retrieve a Paginated List of Active Items
   */
  findAll: (params: { endpointName: string | number }, query?: QueryOptions) => ({
    action: 'findAll' as const,
    pathParams: params,
    input: query,
  }),

  /**
   * POST /api/v1/dynamic/{endpointName}
   * Create a New Item
   */
  create: (params: { endpointName: string | number }, body: DynamicDataController_createRequest) => ({
    action: 'create' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * GET /api/v1/dynamic/{endpointName}/{id}
   * Retrieve a Single Item by ID
   */
  findOne: (params: { endpointName: string | number; id: string | number }) => ({
    action: 'findOne' as const,
    pathParams: params,
  }),

  /**
   * PATCH /api/v1/dynamic/{endpointName}/{id}
   * Update an Existing Item
   */
  update: (params: { endpointName: string | number; id: string | number }, body: DynamicDataController_updateRequest) => ({
    action: 'update' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/dynamic/{endpointName}/{id}
   * Permanently Delete a Single Item
   */
  remove: (params: { endpointName: string | number; id: string | number }) => ({
    action: 'remove' as const,
    pathParams: params,
  }),

  /**
   * DELETE /api/v1/dynamic/{endpointName}/{id}/soft-delete
   * Soft Delete a Single Item
   */
  softRemove: (params: { endpointName: string | number; id: string | number }) => ({
    action: 'softRemove' as const,
    pathParams: params,
  }),

  /**
   * POST /api/v1/dynamic/{endpointName}/{id}/restore
   * Restore a Soft-Deleted Item
   */
  restore: (params: { endpointName: string | number; id: string | number }) => ({
    action: 'restore' as const,
    pathParams: params,
  }),

  /**
   * POST /api/v1/dynamic/{endpointName}/bulk/soft-delete
   * Soft Delete Multiple Items in Bulk
   */
  bulkSoftRemove: (params: { endpointName: string | number }, body: DynamicDataController_bulkSoftRemoveRequest) => ({
    action: 'bulkSoftRemove' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * POST /api/v1/dynamic/{endpointName}/bulk/restore
   * Restore Multiple Items in Bulk
   */
  bulkRestore: (params: { endpointName: string | number }, body: DynamicDataController_bulkRestoreRequest) => ({
    action: 'bulkRestore' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * POST /api/v1/dynamic/{endpointName}/bulk/delete
   * Permanently Delete Multiple Items in Bulk
   */
  bulkRemove: (params: { endpointName: string | number }, body: DynamicDataController_bulkRemoveRequest) => ({
    action: 'bulkRemove' as const,
    pathParams: params,
    input: body,
  }),

};