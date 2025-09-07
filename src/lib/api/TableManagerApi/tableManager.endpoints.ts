// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { TableManagerController_createRequest, TableManagerController_createOneToManyRelationRequest, TableManagerController_createOneToOneRelationRequest, TableManagerController_createManyToManyRelationRequest, TableManagerController_updateRequest } from './types';

export const tableManagerEndpoints = {
  /**
   * GET /api/v1/tables
   * Get All __dynamic tables__
   */
  findAll: (query?: QueryOptions) => ({
    action: 'findAll' as const,
    input: query,
  }),

  /**
   * POST /api/v1/tables
   * إنشاء جدول ديناميكي وواجهة برمجة تطبيقاته
   */
  create: (body: TableManagerController_createRequest) => ({
    action: 'create' as const,
    input: body,
  }),

  /**
   * POST /api/v1/tables/relations/one-to-many
   * إنشاء علاقة "واحد إلى متعدد" (One-to-Many)
   */
  createOneToManyRelation: (body: TableManagerController_createOneToManyRelationRequest) => ({
    action: 'createOneToManyRelation' as const,
    input: body,
  }),

  /**
   * POST /api/v1/tables/relations/one-to-one
   * إنشاء علاقة "واحد إلى واحد" (One-to-One)
   */
  createOneToOneRelation: (body: TableManagerController_createOneToOneRelationRequest) => ({
    action: 'createOneToOneRelation' as const,
    input: body,
  }),

  /**
   * POST /api/v1/tables/relations/many-to-many
   * إنشاء علاقة "متعدد إلى متعدد" (Many-to-Many)
   */
  createManyToManyRelation: (body: TableManagerController_createManyToManyRelationRequest) => ({
    action: 'createManyToManyRelation' as const,
    input: body,
  }),

  /**
   * GET /api/v1/tables/metadata/{endpointName}
   * الحصول على البيانات الوصفية الكاملة لجدول ديناميكي
   */
  getMetadata: (params: { endpointName: string | number }) => ({
    action: 'getMetadata' as const,
    pathParams: params,
  }),

  /**
   * GET /api/v1/tables/columns/filed/{endpointName}
   * الحصول على تفاصيل أعمدة جدول معين فقط
   */
  getColumns: (params: { endpointName: string | number }) => ({
    action: 'getColumns' as const,
    pathParams: params,
  }),

  /**
   * PATCH /api/v1/tables/{endpointName}
   * تحديث البيانات الوصفية لجدول (مثل اسم العرض)
   */
  update: (params: { endpointName: string | number }, body: TableManagerController_updateRequest) => ({
    action: 'update' as const,
    pathParams: params,
    input: body,
  }),

  /**
   * DELETE /api/v1/tables/{endpointName}
   * حذف جدول ديناميكي بالكامل (عملية لا يمكن التراجع عنها)
   */
  delete: (params: { endpointName: string | number }) => ({
    action: 'delete' as const,
    pathParams: params,
  }),

};