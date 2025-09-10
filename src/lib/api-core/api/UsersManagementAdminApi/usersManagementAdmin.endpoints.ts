// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { UsersController_updateRequest } from './types';

export const usersManagementAdminEndpoints = {
  /**
   * GET /api/v1/users
   * Get all users with pagination, filtering, sorting, and searching
   */
  findAll: (query?: QueryOptions) => ({
    action: 'findAll' as const,
    input: query,
  }),

  /**
   * GET /api/v1/users/{id}
   * Get a single user by ID (Admin)
   */
  findOne: (params: { id: string | number }) => ({
    action: 'findOne' as const,
    pathParams: params,
  }),

  /**
   * PATCH /api/v1/users/{id}
   * Update a user by ID (Admin)
   */
  update: (params: { id: string | number }, body: UsersController_updateRequest) => ({
    action: 'update' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/users/{id}
   * Delete a user by ID (Admin)
   */
  remove: (params: { id: string | number }) => ({
    action: 'remove' as const,
    pathParams: params,
  }),

};