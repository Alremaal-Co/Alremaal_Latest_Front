// This file is auto-generated. Do not edit directly.

import { z } from 'zod';

/** Zod schema for {@link DynamicDataController_bulkRemoveRequest}. */
export const DynamicDataController_bulkRemoveRequestSchema = z.object({
  ids: z.array(z.any()).describe("An array of UUIDs for the items to be deleted.")
});

export type DynamicDataController_bulkRemoveRequestValidated = z.infer<typeof DynamicDataController_bulkRemoveRequestSchema>;

/** Zod schema for {@link DynamicDataController_bulkRestoreRequest}. */
export const DynamicDataController_bulkRestoreRequestSchema = z.object({
  ids: z.array(z.any()).describe("An array of UUIDs for the soft-deleted items to be restored.")
});

export type DynamicDataController_bulkRestoreRequestValidated = z.infer<typeof DynamicDataController_bulkRestoreRequestSchema>;

/** Zod schema for {@link DynamicDataController_bulkSoftRemoveRequest}. */
export const DynamicDataController_bulkSoftRemoveRequestSchema = z.object({
  ids: z.array(z.any()).describe("An array of UUIDs for the items to be deleted.")
});

export type DynamicDataController_bulkSoftRemoveRequestValidated = z.infer<typeof DynamicDataController_bulkSoftRemoveRequestSchema>;

/** Zod schema for {@link DynamicDataController_createRequest}. */
export const DynamicDataController_createRequestSchema = z.object({
  data: z.record(z.unknown()).describe("A dynamic object representing the data for the new item. Keys and values depend on the endpoint.")
});

export type DynamicDataController_createRequestValidated = z.infer<typeof DynamicDataController_createRequestSchema>;

/** Zod schema for {@link DynamicDataController_findAllResponse}. */
export const DynamicDataController_findAllResponseSchema = z.object({
  data: z.array(z.any()).describe("Array of data items for the current page."),
  meta: z.record(z.unknown()).describe("Metadata about the pagination."),
  links: z.record(z.unknown()).describe("Links to navigate through the pages."),
  fildes: z.record(z.unknown()).describe("Localized field labels and metadata for UI rendering.").optional()
});

export type DynamicDataController_findAllResponseValidated = z.infer<typeof DynamicDataController_findAllResponseSchema>;

/** Zod schema for {@link DynamicDataController_findColumnValues_v1ResponseItem}. */
export const DynamicDataController_findColumnValues_v1ResponseItemSchema = z.object({
  name: z.string().min(1, { "message": "validation.string.nonempty" }).describe("The display name of the item."),
  code: z.string().min(1, { "message": "validation.string.nonempty" }).describe("The unique identifier (ID/code) of the item.")
});

export type DynamicDataController_findColumnValues_v1ResponseItemValidated = z.infer<typeof DynamicDataController_findColumnValues_v1ResponseItemSchema>;

/** Zod schema for {@link DynamicDataController_findForSelect2_v1ResponseItem}. */
export const DynamicDataController_findForSelect2_v1ResponseItemSchema = z.object({
  name: z.string().min(1, { "message": "validation.string.nonempty" }).describe("The display name of the item."),
  code: z.string().min(1, { "message": "validation.string.nonempty" }).describe("The unique identifier (ID/code) of the item.")
});

export type DynamicDataController_findForSelect2_v1ResponseItemValidated = z.infer<typeof DynamicDataController_findForSelect2_v1ResponseItemSchema>;

/** Zod schema for {@link DynamicDataController_findInTrashResponse}. */
export const DynamicDataController_findInTrashResponseSchema = z.object({
  data: z.array(z.any()).describe("Array of data items for the current page."),
  meta: z.record(z.unknown()).describe("Metadata about the pagination."),
  links: z.record(z.unknown()).describe("Links to navigate through the pages."),
  fildes: z.record(z.unknown()).describe("Localized field labels and metadata for UI rendering.").optional()
});

export type DynamicDataController_findInTrashResponseValidated = z.infer<typeof DynamicDataController_findInTrashResponseSchema>;

/** Zod schema for {@link DynamicDataController_updateRequest}. */
export const DynamicDataController_updateRequestSchema = z.object({
  data: z.record(z.unknown()).describe("A dynamic object containing the fields to update. You only need to send the fields you want to change.")
});

export type DynamicDataController_updateRequestValidated = z.infer<typeof DynamicDataController_updateRequestSchema>;