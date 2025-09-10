// Auto-generated file. Do not edit.

import { z } from 'zod';
import { SidebarControllerCreateRequestLangEnum, SidebarControllerUpdateRequestLangEnum } from './enums';

/** Zod schema for {@link SidebarControllerBulkSoftDeleteRequest}. */
export const SidebarControllerBulkSoftDeleteRequestSchema = z.object({
  names: z.array(z.any()).describe("An array of unique sidebar names to be soft-deleted.")
});

export type SidebarControllerBulkSoftDeleteRequestValidated = z.infer<typeof SidebarControllerBulkSoftDeleteRequestSchema>;

/** Zod schema for {@link SidebarControllerCreateRequest}. */
export const SidebarControllerCreateRequestSchema = z.object({
  name: z.string().min(1, { "message": "validation.string.nonempty" }).describe("A unique name for the sidebar, used as an identifier."),
  lang: z.enum(SidebarControllerCreateRequestLangEnum).describe("The language of the sidebar data being provided."),
  data: z.record(z.unknown()).describe("The full JSON object representing the sidebar structure.")
});

export type SidebarControllerCreateRequestValidated = z.infer<typeof SidebarControllerCreateRequestSchema>;

/** Zod schema for {@link SidebarControllerCreateResponse}. */
export const SidebarControllerCreateResponseSchema = z.object({

});

export type SidebarControllerCreateResponseValidated = z.infer<typeof SidebarControllerCreateResponseSchema>;

/** Zod schema for {@link SidebarControllerGetVersions2V1ResponseItem}. */
export const SidebarControllerGetVersions2V1ResponseItemSchema = z.object({

});

export type SidebarControllerGetVersions2V1ResponseItemValidated = z.infer<typeof SidebarControllerGetVersions2V1ResponseItemSchema>;

/** Zod schema for {@link SidebarControllerGetVersionsV1ResponseItem}. */
export const SidebarControllerGetVersionsV1ResponseItemSchema = z.object({

});

export type SidebarControllerGetVersionsV1ResponseItemValidated = z.infer<typeof SidebarControllerGetVersionsV1ResponseItemSchema>;

/** Zod schema for {@link SidebarControllerUpdateRequest}. */
export const SidebarControllerUpdateRequestSchema = z.object({
  lang: z.enum(SidebarControllerUpdateRequestLangEnum).describe("The language of the new sidebar version."),
  data: z.record(z.unknown()).describe("The full JSON object for the new version of the sidebar.")
});

export type SidebarControllerUpdateRequestValidated = z.infer<typeof SidebarControllerUpdateRequestSchema>;

/** Zod schema for {@link SidebarControllerUpdateResponse}. */
export const SidebarControllerUpdateResponseSchema = z.object({

});

export type SidebarControllerUpdateResponseValidated = z.infer<typeof SidebarControllerUpdateResponseSchema>;