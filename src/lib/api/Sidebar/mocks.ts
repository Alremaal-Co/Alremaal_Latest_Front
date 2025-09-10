// Auto-generated file. Do not edit.
import type { SidebarControllerBulkSoftDeleteRequest, SidebarControllerCreateRequest, SidebarControllerCreateResponse, SidebarControllerGetVersions2V1ResponseItem, SidebarControllerGetVersionsV1ResponseItem, SidebarControllerUpdateRequest, SidebarControllerUpdateResponse } from './types';
import { SidebarControllerCreateRequestLangEnum, SidebarControllerUpdateRequestLangEnum } from './enums';

export const mockSidebarControllerBulkSoftDeleteRequest: SidebarControllerBulkSoftDeleteRequest = {
  "names": [
    "admin-sidebar",
    "user-sidebar"
  ]
};

export const mockSidebarControllerCreateRequest: SidebarControllerCreateRequest = {
  "name": "admin-sidebar",
  "lang": "en",
  "data": {
    "sections": [
      {
        "title": "Menu",
        "items": [
          {
            "title": "Dashboard",
            "href": "/admin/dashboard"
          }
        ]
      }
    ]
  }
};

export const mockSidebarControllerCreateResponse: SidebarControllerCreateResponse = {};

export const mockSidebarControllerGetVersions2V1ResponseItem: SidebarControllerGetVersions2V1ResponseItem = {};

export const mockSidebarControllerGetVersionsV1ResponseItem: SidebarControllerGetVersionsV1ResponseItem = {};

export const mockSidebarControllerUpdateRequest: SidebarControllerUpdateRequest = {
  "lang": "ar",
  "data": {
    "sections": [
      {
        "title": "القائمة",
        "items": [
          {
            "title": "لوحة التحكم",
            "href": "/admin/dashboard"
          }
        ]
      }
    ]
  }
};

export const mockSidebarControllerUpdateResponse: SidebarControllerUpdateResponse = {};