// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { DynamicDataController_bulkRemoveRequest, DynamicDataController_bulkRestoreRequest, DynamicDataController_bulkSoftRemoveRequest, DynamicDataController_createRequest, DynamicDataController_findAllResponse, DynamicDataController_findColumnValues_v1ResponseItem, DynamicDataController_findForSelect2_v1ResponseItem, DynamicDataController_findInTrashResponse, DynamicDataController_updateRequest } from './types';

export const DynamicDataOperationsApi: ApiModuleConfig<{
  findForSelect2: ActionConfigModule<QueryOptions, DynamicDataController_findForSelect2_v1ResponseItem[]>;
  findColumnValues: ActionConfigModule<QueryOptions, DynamicDataController_findColumnValues_v1ResponseItem[]>;
  findInTrash: ActionConfigModule<QueryOptions, DynamicDataController_findInTrashResponse>;
  findAll: ActionConfigModule<QueryOptions, any[]>;
  create: ActionConfigModule<DynamicDataController_createRequest, Record<string, any>>;
  findOne: ActionConfigModule<void, Record<string, any>>; 
  update: ActionConfigModule<DynamicDataController_updateRequest, Record<string, any>>;
  remove: ActionConfigModule<void, void>; 
  softRemove: ActionConfigModule<void, void>; 
  restore: ActionConfigModule<void, Record<string, any>>; 
  bulkSoftRemove: ActionConfigModule<DynamicDataController_bulkSoftRemoveRequest, Record<string, any>>;
  bulkRestore: ActionConfigModule<DynamicDataController_bulkRestoreRequest, Record<string, any>>;
  bulkRemove: ActionConfigModule<DynamicDataController_bulkRemoveRequest, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/dynamic/',
  actions: {
    findForSelect2: {
      "method": "GET",
      "path": "{endpointName}/select2",
      "description": "Get Data in Select2 Format",
      "hasQuery": true,
      "autoFetch": !true, 
    },
    findColumnValues: {
      "method": "GET",
      "path": "{endpointName}/columns/{columnName}/select2",
      "description": "Get Values for a Relational Column",
      "hasQuery": true,
      "autoFetch": !true,
    },
    findInTrash: {
      "method": "GET",
      "path": "{endpointName}/trash",
      "description": "Retrieve a Paginated List of Soft-Deleted Items (Trash)",
      "hasQuery": true,
      "autoFetch": !true,
    },
    findAll: {
      "method": "GET",
      "path": "{endpointName}",
      "description": "Retrieve a Paginated List of Active Items",
      "hasQuery": true,
      "autoFetch": true, 
      _input:{
        limit:10,
        page:1
      }
    },
    create: {
      "method": "POST",
      "path": "{endpointName}",
      "description": "Create a New Item",
      "hasQuery": false,
      "autoFetch": false,
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],

    },
    findOne: {
      "method": "GET",
      "path": "{endpointName}/{id}",
      "description": "Retrieve a Single Item by ID",
      "hasQuery": false,
      "autoFetch": false,
    },
    update: {
      "method": "PATCH",
      "path": "{endpointName}/{id}",
      "description": "Update an Existing Item",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    remove: {
      "method": "DELETE",
      "path": "{endpointName}/{id}",
      "description": "Permanently Delete a Single Item",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    softRemove: {
      "method": "DELETE",
      "path": "{endpointName}/{id}/soft-delete",
      "description": "Soft Delete a Single Item",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    restore: {
      "method": "POST",
      "path": "{endpointName}/{id}/restore",
      "description": "Restore a Soft-Deleted Item",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    bulkSoftRemove: {
      "method": "POST",
      "path": "{endpointName}/bulk/soft-delete",
      "description": "Soft Delete Multiple Items in Bulk",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    bulkRestore: {
      "method": "POST",
      "path": "{endpointName}/bulk/restore",
      "description": "Restore Multiple Items in Bulk",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    },
    bulkRemove: {
      "method": "POST",
      "path": "{endpointName}/bulk/delete",
      "description": "Permanently Delete Multiple Items in Bulk",
      invalidates: ['findAll' , 'findInTrash' , 'findColumnValues' , 'findForSelect2' , 'findOne'],
      "hasQuery": false,
      "autoFetch": false,
    }
  },
};