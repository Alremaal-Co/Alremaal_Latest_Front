// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { UsersController_updateRequest } from './types';

export const UsersManagementAdminApi: ApiModuleConfig<{
  findAll: ActionConfigModule<QueryOptions, Record<string, any>>;
  findOne: ActionConfigModule<undefined, Record<string, any>>;
  update: ActionConfigModule<UsersController_updateRequest, Record<string, any>>;
  remove: ActionConfigModule<undefined, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/',
  actions: {
    findAll: {
      "method": "GET",
      "path": "users",
      "description": "Get all users with pagination, filtering, sorting, and searching",
      "hasQuery": true,
      "autoFetch": true,
      "requiresAuth": false,
      "pathParams": []
    },
    findOne: {
      "method": "GET",
      "path": "users/{id}",
      "description": "Get a single user by ID (Admin)",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "id"
      ]
    },
    update: {
      "method": "PATCH",
      "path": "users/{id}",
      "description": "Update a user by ID (Admin)",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "id"
      ]
    },
    remove: {
      "method": "DELETE",
      "path": "users/{id}",
      "description": "Delete a user by ID (Admin)",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "id"
      ]
    }
  },
};