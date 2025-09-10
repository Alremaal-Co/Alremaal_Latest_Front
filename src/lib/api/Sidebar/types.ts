// Auto-generated file. Do not edit.

import type { SidebarControllerCreateRequestLangEnum, SidebarControllerUpdateRequestLangEnum } from './enums';

export interface SidebarControllerBulkSoftDeleteRequest {
  /** An array of unique sidebar names to be soft-deleted. */
  names: any[];
}

export interface SidebarControllerCreateRequest {
  /** A unique name for the sidebar, used as an identifier. */
  name: string;
  /** The language of the sidebar data being provided. */
  lang: SidebarControllerCreateRequestLangEnum;
  /** The full JSON object representing the sidebar structure. */
  data: Record<string, any>;
}

export interface SidebarControllerCreateResponse {
}

export interface SidebarControllerGetVersions2V1ResponseItem {
}

export interface SidebarControllerGetVersionsV1ResponseItem {
}

export interface SidebarControllerUpdateRequest {
  /** The language of the new sidebar version. */
  lang: SidebarControllerUpdateRequestLangEnum;
  /** The full JSON object for the new version of the sidebar. */
  data: Record<string, any>;
}

export interface SidebarControllerUpdateResponse {
}