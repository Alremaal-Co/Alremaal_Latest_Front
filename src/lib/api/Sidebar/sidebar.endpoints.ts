// Auto-generated file. Do not edit.

import type { QueryOptions } from 'api-core-lib';
import type { SidebarControllerCreateRequest, SidebarControllerUpdateRequest, SidebarControllerBulkSoftDeleteRequest } from './types';

export const sidebarEndpoints = {
  /**
   * POST /api/v1/admin/sidebar/
   * Create a new sidebar
   */
  create: (body: SidebarControllerCreateRequest) => ({
    action: 'create' as const,
    input: body,
  }),

  /**
   * GET /api/v1/admin/sidebar{name}
   * Retrieve the active sidebar version
   */
  findActive: (params: { name: string | number }) => ({
    action: 'findActive' as const,
    pathParams: params,
  }),

  /**
   * PUT /api/v1/admin/sidebar{name}
   * Update a sidebar by creating a new version
   */
  update: (params: { name: string | number }, body: SidebarControllerUpdateRequest) => ({
    action: 'update' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/admin/sidebar{name}
   * Soft-delete a sidebar
   */
  softDelete: (params: { name: string | number }) => ({
    action: 'softDelete' as const,
    pathParams: params,
  }),

  /**
   * POST /api/v1/admin/sidebarbulk-delete
   * Bulk soft-delete sidebars
   */
  bulkSoftDelete: (body: SidebarControllerBulkSoftDeleteRequest) => ({
    action: 'bulkSoftDelete' as const,
    input: body,
  }),

  /**
   * GET /api/v1/admin/sidebar{name}/versions
   * Get all historical versions
   */
  getVersions: (params: { name: string | number }) => ({
    action: 'getVersions' as const,
    pathParams: params,
  }),

  /**
   * GET /api/v1/admin/sidebar{name}/versions2
   * Get all historical versions
   */
  getVersions2: (params: { name: string | number }) => ({
    action: 'getVersions2' as const,
    pathParams: params,
  }),

};