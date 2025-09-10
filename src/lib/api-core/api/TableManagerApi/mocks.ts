// This file is auto-generated. Do not edit directly.
import type { TableManagerController_createManyToManyRelationRequest, TableManagerController_createOneToManyRelationRequest, TableManagerController_createOneToOneRelationRequest, TableManagerController_createRequest, TableManagerController_findAllResponse, TableManagerController_updateRequest } from './types';
import { TableManagerController_createOneToManyRelationRequestOnDeleteActionEnum, TableManagerController_createOneToOneRelationRequestOnDeleteActionEnum } from './enums';

export const mockTableManagerController_createManyToManyRelationRequest: TableManagerController_createManyToManyRelationRequest = {
  "tableA": "property_requests",
  "tableB": "districts",
  "junctionTableName": "request_target_districts"
};

export const mockTableManagerController_createOneToManyRelationRequest: TableManagerController_createOneToManyRelationRequest = {
  "manySideTable": "districts",
  "oneSideTable": "cities",
  "relationColumnName": "city_id",
  "onDeleteAction": "SET NULL"
};

export const mockTableManagerController_createOneToOneRelationRequest: TableManagerController_createOneToOneRelationRequest = {
  "primaryTable": "users",
  "dependentTable": "profiles",
  "relationColumnName": "user_id",
  "onDeleteAction": "CASCADE"
};

export const mockTableManagerController_createRequest: TableManagerController_createRequest = {
  "endpointName": "real-estate-offers",
  "displayName": "الاعلانات العقارية",
  "defaultLimit": 20,
  "columns": [
    "offer_name"
  ],
  "typeViewActions": "link",
  "select2NameColumnAr": "city_name_ar",
  "select2NameColumnEn": "city_name_en",
  "description": "Mock Description",
  "category": "Mock Category",
  "isActive": true,
  "isSystem": true
};

// export const mockTableManagerController_findAllResponse: TableManagerController_findAllResponse = {

// };

export const mockTableManagerController_updateRequest: TableManagerController_updateRequest = {
  "endpointName": "real-estate-offers",
  "displayName": "الاعلانات العقارية",
  "defaultLimit": 20,
  "typeViewActions": "link",
  "select2NameColumnAr": "city_name_ar",
  "select2NameColumnEn": "city_name_en",
  "description": "Mock Description",
  "category": "Mock Category",
  "isActive": true,
  "isSystem": true,
  "addColumns": [
    "offer_name"
  ]
};