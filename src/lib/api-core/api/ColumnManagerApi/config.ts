// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { ColumnManagerController_addColumnRequest, ColumnManagerController_addColumnResponse, ColumnManagerController_deleteRelationResponse, ColumnManagerController_updateColumnRequest } from './types';

export const ColumnManagerApi: ApiModuleConfig<{
  getColumns: ActionConfigModule<undefined, Record<string, any>[]>;
  addColumn: ActionConfigModule<ColumnManagerController_addColumnRequest, ColumnManagerController_addColumnResponse>;
  deleteColumn: ActionConfigModule<undefined, void>;
  updateColumn: ActionConfigModule<ColumnManagerController_updateColumnRequest, Record<string, any>>;
  deleteRelation: ActionConfigModule<undefined, ColumnManagerController_deleteRelationResponse>;
  clearColumnValues: ActionConfigModule<undefined, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/tables/columns/',
  actions: {
    getColumns: {
      "method": "GET",
      "path": "{endpointName}",
      "description": "Get all columns for a specific table",
      "hasQuery": !false,
      "autoFetch": !false,
      "requiresAuth": !false,
      "pathParams": [
        "endpointName"
      ]
    },
    addColumn: {
      "method": "POST",
      "path": "{endpointName}",
      "description": "Add a new column to a table",
      invalidates: ['getColumns'],
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "endpointName"
      ]
    },
    deleteColumn: {
      "method": "DELETE",
      "path": "{endpointName}/{columnName}",
      "description": "Delete a column from a table (irreversible)",
      invalidates: ['getColumns'],
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "endpointName",
        "columnName"
      ]
    },
    updateColumn: {
      "method": "PATCH",
      "path": "{endpointName}/{columnName}",
      "description": "Update a column's metadata",
      invalidates: ['getColumns'],
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "endpointName",
        "columnName"
      ]
    },
    deleteRelation: {
      "method": "DELETE",
      "path": "{endpointName}/{columnName}/link",
      "description": "Delete a foreign key relationship from a column",
      invalidates: ['getColumns'],
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "endpointName",
        "columnName"
      ]
    },
    clearColumnValues: {
      "method": "POST",
      "path": "{endpointName}/{columnName}/clear",
      "description": "Clear all values in a column (sets them to NULL)",
      invalidates: ['getColumns'],
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": [
        "endpointName",
        "columnName"
      ]
    }
  },
};