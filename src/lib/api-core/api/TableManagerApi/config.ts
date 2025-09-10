// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { TableManagerController_createManyToManyRelationRequest, TableManagerController_createOneToManyRelationRequest, TableManagerController_createOneToOneRelationRequest, TableManagerController_createRequest, TableManagerController_findAllResponse, TableManagerController_updateRequest } from './types';

export const TableManagerApi: ApiModuleConfig<{
  findAll: ActionConfigModule<QueryOptions,any>;
  create: ActionConfigModule<TableManagerController_createRequest, Record<string, any>>;
  createOneToManyRelation: ActionConfigModule<TableManagerController_createOneToManyRelationRequest, Record<string, any>>;
  createOneToOneRelation: ActionConfigModule<TableManagerController_createOneToOneRelationRequest, Record<string, any>>;
  createManyToManyRelation: ActionConfigModule<TableManagerController_createManyToManyRelationRequest, Record<string, any>>;
  getMetadata: ActionConfigModule<undefined, Record<string, any>>;
  getColumns: ActionConfigModule<undefined, Record<string, any>>;
  update: ActionConfigModule<TableManagerController_updateRequest, Record<string, any>>;
  delete: ActionConfigModule<undefined, void>;
}> = {
  baseEndpoint: '/api/v1/',
  actions: {
    findAll: {
      "method": "GET",
      "path": "tables",
      "description": "Get All __dynamic tables__",
      "hasQuery": true,
      "autoFetch": true,
      // "requiresAuth": false,
      // "pathParams": []
    },
    create: {
      "method": "POST",
      "path": "tables",
      "description": "إنشاء جدول ديناميكي وواجهة برمجة تطبيقاته",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": []
    },
    createOneToManyRelation: {
      "method": "POST",
      "path": "tables/relations/one-to-many",
      "description": "إنشاء علاقة \"واحد إلى متعدد\" (One-to-Many)",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": []
    },
    createOneToOneRelation: {
      "method": "POST",
      "path": "tables/relations/one-to-one",
      "description": "إنشاء علاقة \"واحد إلى واحد\" (One-to-One)",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": []
    },
    createManyToManyRelation: {
      "method": "POST",
      "path": "tables/relations/many-to-many",
      "description": "إنشاء علاقة \"متعدد إلى متعدد\" (Many-to-Many)",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": []
    },
    getMetadata: {
      "method": "GET",
      "path": "tables/metadata/{endpointName}",
      "description": "الحصول على البيانات الوصفية الكاملة لجدول ديناميكي",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": [
      //   "endpointName"
      // ]
    },
    getColumns: {
      "method": "GET",
      "path": "tables/columns/filed/{endpointName}",
      "description": "الحصول على تفاصيل أعمدة جدول معين فقط",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": [
      //   "endpointName"
      // ]
    },
    update: {
      "method": "PATCH",
      "path": "tables/{endpointName}",
      "description": "تحديث البيانات الوصفية لجدول (مثل اسم العرض)",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": [
      //   "endpointName"
      // ]
    },
    delete: {
      "method": "DELETE",
      "path": "tables/{endpointName}",
      "description": "حذف جدول ديناميكي بالكامل (عملية لا يمكن التراجع عنها)",
      "hasQuery": false,
      "autoFetch": false,
      // "requiresAuth": false,
      // "pathParams": [
      //   "endpointName"
      // ]
    }
  },
};