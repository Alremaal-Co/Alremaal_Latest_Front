// This file is auto-generated. Do not edit directly.

export interface DynamicDataController_bulkRemoveRequest {
  /** An array of UUIDs for the items to be deleted. */
  ids: string[];
}

export interface DynamicDataController_bulkRestoreRequest {
  /** An array of UUIDs for the soft-deleted items to be restored. */
  ids: string[];
}

export interface DynamicDataController_bulkSoftRemoveRequest {
  /** An array of UUIDs for the items to be deleted. */
  ids: string[];
}

export interface DynamicDataController_createRequest {
  /** A dynamic object representing the data for the new item. Keys and values depend on the endpoint. */
  data: Record<string, any>;
}

export interface DynamicDataController_findAllResponse {
  /** Array of data items for the current page. */
  // data: any[];
  // /** Metadata about the pagination. */
  // meta: Record<string, any>;
  // /** Links to navigate through the pages. */
  // links: Record<string, any>;
  // /** Localized field labels and metadata for UI rendering. */
  // fildes?: Record<string, any>;
}

export interface DynamicDataController_findColumnValues_v1ResponseItem {
  /** The display name of the item. */
  name: string;
  /** The unique identifier (ID/code) of the item. */
  code: string;
}

export interface DynamicDataController_findForSelect2_v1ResponseItem {
  /** The display name of the item. */
  name: string;
  /** The unique identifier (ID/code) of the item. */
  code: string;
}

export interface DynamicDataController_findInTrashResponse {
  /** Array of data items for the current page. */
  data: any[];
  /** Metadata about the pagination. */
  meta: Record<string, any>;
  /** Links to navigate through the pages. */
  links: Record<string, any>;
  /** Localized field labels and metadata for UI rendering. */
  fildes?: Record<string, any>;
}

export interface DynamicDataController_updateRequest {
  /** A dynamic object containing the fields to update. You only need to send the fields you want to change. */
  data: Record<string, any>;
}