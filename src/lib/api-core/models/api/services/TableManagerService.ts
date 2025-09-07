/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateManyToManyDto } from '../../CreateManyToManyDto';
import type { CreateOneToManyDto } from '../../CreateOneToManyDto';
import type { CreateOneToOneDto } from '../../CreateOneToOneDto';
import type { CreateTableDto } from '../../CreateTableDto';
import type { Promise } from '../../Promise';
import type { UpdateTableDto } from '../../UpdateTableDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TableManagerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get All __dynamic tables__
     * query parameters
     * @returns Promise تم جلب القائمة بنجاح.
     * @throws ApiError
     */
    public tableManagerControllerFindAllV1({
        output = 'pagination',
        page = 1,
        limit = 10,
        search,
        select,
        filter,
        sortBy,
        relations,
    }: {
        /**
         * The desired output format for the data.
         */
        output?: 'pagination' | 'geojson' | 'select2',
        /**
         * The page number to retrieve.
         */
        page?: number,
        /**
         * The number of items to return per page.
         */
        limit?: number,
        /**
         * A general search term to query across all searchable fields.
         */
        search?: string,
        /**
         * A comma-separated list of columns to include in the response (e.g., id,name,createdAt).
         */
        select?: Array<string>,
        /**
         *  filter[0][field]=status&filter[0][operator]=eq&filter[0][value]=active
         */
        filter?: Record<string, any>,
        /**
         * Dynamic sorting criteria (e.g., "name:ASC" or "createdAt:DESC").
         */
        sortBy?: string,
        /**
         * An array of relation-loading conditions (JSON string format).
         */
        relations?: string,
    }): CancelablePromise<Promise> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tables',
            query: {
                'output': output,
                'page': page,
                'limit': limit,
                'search': search,
                'select': select,
                'filter': filter,
                'sortBy': sortBy,
                'relations': relations,
            },
            errors: {
                404: `إذا كان \`endpointName\` غير موجود.`,
            },
        });
    }
    /**
     * إنشاء جدول ديناميكي وواجهة برمجة تطبيقاته
     * @returns any تم إنشاء الجدول بنجاح.
     * @throws ApiError
     */
    public tableManagerControllerCreateV1({
        requestBody,
    }: {
        requestBody: CreateTableDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `بيانات غير صالحة أو اسم نقطة النهاية موجود بالفعل.`,
            },
        });
    }
    /**
     * إنشاء علاقة "واحد إلى متعدد" (One-to-Many)
     * @returns any تم إنشاء العلاقة بنجاح
     * @throws ApiError
     */
    public tableManagerControllerCreateOneToManyRelationV1({
        requestBody,
    }: {
        requestBody: CreateOneToManyDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables/relations/one-to-many',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * إنشاء علاقة "واحد إلى واحد" (One-to-One)
     * @returns any تم إنشاء العلاقة بنجاح
     * @throws ApiError
     */
    public tableManagerControllerCreateOneToOneRelationV1({
        requestBody,
    }: {
        requestBody: CreateOneToOneDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables/relations/one-to-one',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * إنشاء علاقة "متعدد إلى متعدد" (Many-to-Many)
     * @returns any تم إنشاء الجدول الوسيط والعلاقات بنجاح
     * @throws ApiError
     */
    public tableManagerControllerCreateManyToManyRelationV1({
        requestBody,
    }: {
        requestBody: CreateManyToManyDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/tables/relations/many-to-many',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * الحصول على البيانات الوصفية الكاملة لجدول ديناميكي
     * @returns any تم العثور على البيانات الوصفية.
     * @throws ApiError
     */
    public tableManagerControllerGetMetadataV1({
        endpointName,
    }: {
        /**
         * اسم نقطة النهاية للجدول
         */
        endpointName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tables/metadata/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            errors: {
                404: `نقطة النهاية غير موجودة.`,
            },
        });
    }
    /**
     * الحصول على تفاصيل أعمدة جدول معين فقط
     * @returns any تم العثور على الأعمدة.
     * @throws ApiError
     */
    public tableManagerControllerGetColumnsV1({
        endpointName,
    }: {
        /**
         * اسم نقطة النهاية للجدول
         */
        endpointName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/tables/columns/filed/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            errors: {
                404: `نقطة النهاية غير موجودة.`,
            },
        });
    }
    /**
     * تحديث البيانات الوصفية لجدول (مثل اسم العرض)
     * @returns any تم تحديث الجدول بنجاح.
     * @throws ApiError
     */
    public tableManagerControllerUpdateV1({
        endpointName,
        requestBody,
    }: {
        /**
         * اسم نقطة النهاية للجدول المراد تحديثه
         */
        endpointName: string,
        requestBody: UpdateTableDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/tables/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `بيانات التحديث غير صالحة.`,
                404: `نقطة النهاية غير موجودة.`,
            },
        });
    }
    /**
     * حذف جدول ديناميكي بالكامل (عملية لا يمكن التراجع عنها)
     * @returns void
     * @throws ApiError
     */
    public tableManagerControllerDeleteV1({
        endpointName,
    }: {
        /**
         * اسم نقطة النهاية للجدول المراد حذفه
         */
        endpointName: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/tables/{endpointName}',
            path: {
                'endpointName': endpointName,
            },
            errors: {
                404: `نقطة النهاية غير موجودة.`,
            },
        });
    }
}
