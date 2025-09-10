// Auto-generated file. Do not edit.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { SidebarControllerBulkSoftDeleteRequest, SidebarControllerCreateRequest, SidebarControllerCreateResponse, SidebarControllerGetVersions2V1ResponseItem, SidebarControllerGetVersionsV1ResponseItem, SidebarControllerUpdateRequest, SidebarControllerUpdateResponse } from './types';

export const Sidebar: ApiModuleConfig<{
  create: ActionConfigModule<SidebarControllerCreateRequest, SidebarControllerCreateResponse>;
  findActive: ActionConfigModule<undefined, Record<string, any>>;
  update: ActionConfigModule<SidebarControllerUpdateRequest, SidebarControllerUpdateResponse>;
  softDelete: ActionConfigModule<undefined, Record<string, any>>;
  bulkSoftDelete: ActionConfigModule<SidebarControllerBulkSoftDeleteRequest, Record<string, any>>;
  getVersions: ActionConfigModule<undefined, SidebarControllerGetVersionsV1ResponseItem[]>;
  getVersions2: ActionConfigModule<undefined, SidebarControllerGetVersions2V1ResponseItem[]>;
}> = {
  baseEndpoint: '/api/v1/admin/sidebar',
  actions: {
    create: {
      "method": "POST",
      "path": "/",
      "description": "Create a new sidebar",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": []
    },
    findActive: {
      "method": "GET",
      "path": "{name}",
      "description": "Retrieve the active sidebar version",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "name"
      ]
    },
    update: {
      "method": "PUT",
      "path": "{name}",
      "description": "Update a sidebar by creating a new version",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "name"
      ]
    },
    softDelete: {
      "method": "DELETE",
      "path": "{name}",
      "description": "Soft-delete a sidebar",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "name"
      ]
    },
    bulkSoftDelete: {
      "method": "POST",
      "path": "bulk-delete",
      "description": "Bulk soft-delete sidebars",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": []
    },
    getVersions: {
      "method": "GET",
      "path": "{name}/versions",
      "description": "Get all historical versions",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "name"
      ]
    },
    getVersions2: {
      "method": "GET",
      "path": "{name}/versions2",
      "description": "Get all historical versions",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "name"
      ]
    }
  },
};