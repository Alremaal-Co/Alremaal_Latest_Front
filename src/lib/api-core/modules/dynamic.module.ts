import { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';

// ===================================================================================
// #region Generic DTOs & Interfaces
// (في مشروع حقيقي، يمكنك جعل هذه الأنواع أكثر تحديدًا لكل موديول)
// ===================================================================================

/** Represents any record from the dynamic endpoint. */
export type DynamicRecord = Record<string, any>;

/** Represents a standard paginated API response. */
export interface PaginatedResponse<T> {
  data: T[];
  // ... (إضافة خصائص الترقيم الأخرى مثل total, per_page, etc.)
}

/** Represents the input for bulk operations. */
export interface BulkIdsInput {
  ids: Array<string | number>;
}

/** Represents a standard success message response. */
export interface SuccessResponse {
  success: boolean;
  message: string;
}

// ===================================================================================
// #region Dynamic API Module Configuration
// ===================================================================================

/**
 * The single source of truth for the Dynamic Data Operations API.
 * It uses placeholders like `{endpointName}` and `{id}` which will be
 * replaced by the `useApiModule` hook at runtime.
 */
export const dynamicModule: ApiModuleConfig<{
  // Read Operations
  list: ActionConfigModule<QueryOptions, PaginatedResponse<DynamicRecord>>;
  listTrash: ActionConfigModule<QueryOptions, PaginatedResponse<DynamicRecord>>;
  getById: ActionConfigModule<undefined, DynamicRecord>;
  getSelect2: ActionConfigModule<QueryOptions, any[]>; // You can define a Select2Option type
  getColumnSelect2: ActionConfigModule<QueryOptions, any[]>;
  
  // Create & Update Operations
  create: ActionConfigModule<Partial<DynamicRecord>, DynamicRecord>;
  update: ActionConfigModule<Partial<DynamicRecord>, DynamicRecord>;
  
  // Delete & Restore Operations
  softDelete: ActionConfigModule<undefined, SuccessResponse>;
  restore: ActionConfigModule<undefined, DynamicRecord>;
  forceDelete: ActionConfigModule<undefined, SuccessResponse>;
  
  // Bulk Operations
  bulkSoftDelete: ActionConfigModule<BulkIdsInput, SuccessResponse>;
  bulkRestore: ActionConfigModule<BulkIdsInput, SuccessResponse>;
  bulkForceDelete: ActionConfigModule<BulkIdsInput, SuccessResponse>;
}> = {
  baseEndpoint: '/api/v1/dynamic',
  actions: {
    // --- Read Operations ---
    list: {
      method: 'GET', path: '/{endpointName}',
      description: 'Retrieve a Paginated List of Active Items.',
      hasQuery: true, autoFetch: true,
    },
    listTrash: {
      method: 'GET', path: '/{endpointName}/trash',
      description: 'Retrieve a Paginated List of Soft-Deleted Items (Trash).',
      hasQuery: true,
    },
    getById: {
      method: 'GET', path: '/{endpointName}/{id}',
      description: 'Retrieve a Single Item by ID.',
    },
    getSelect2: {
      method: 'GET', path: '/{endpointName}/select2',
      description: 'Get Data in Select2 Format.',
      hasQuery: true,
    },
    getColumnSelect2: {
      method: 'GET', path: '/{endpointName}/columns/{columnName}/select2',
      description: 'Get Values for a Relational Column.',
      hasQuery: true,
    },
    
    // --- Create & Update Operations ---
    create: {
      method: 'POST', path: '/{endpointName}',
      description: 'Create a New Item.',
      invalidates: ['list'], // Auto-refreshes the main list after creation
    },
    update: {
      method: 'PATCH', path: '/{endpointName}/{id}',
      description: 'Update an Existing Item.',
      invalidates: ['list', 'getById'], // Auto-refreshes list and specific item
    },
    
    // --- Delete & Restore Operations ---
    softDelete: {
      method: 'DELETE', path: '/{endpointName}/{id}/soft-delete',
      description: 'Soft Delete a Single Item.',
      invalidates: ['list', 'listTrash', 'getById'], // Refreshes everything relevant
    },
    restore: {
      method: 'POST', path: '/{endpointName}/{id}/restore',
      description: 'Restore a Soft-Deleted Item.',
      invalidates: ['list', 'listTrash', 'getById'],
    },
    forceDelete: {
      method: 'DELETE', path: '/{endpointName}/{id}',
      description: 'Permanently Delete a Single Item.',
      invalidates: ['list', 'listTrash', 'getById'],
    },

    // --- Bulk Operations ---
    bulkSoftDelete: {
      method: 'POST', path: '/{endpointName}/bulk/soft-delete',
      description: 'Soft Delete Multiple Items in Bulk.',
      invalidates: ['list', 'listTrash'],
    },
    bulkRestore: {
      method: 'POST', path: '/{endpointName}/bulk/restore',
      description: 'Restore Multiple Items in Bulk.',
      invalidates: ['list', 'listTrash'],
    },
    bulkForceDelete: {
      method: 'POST', path: '/{endpointName}/bulk/delete',
      description: 'Permanently Delete Multiple Items in Bulk.',
      invalidates: ['list', 'listTrash'],
    },
  },
};