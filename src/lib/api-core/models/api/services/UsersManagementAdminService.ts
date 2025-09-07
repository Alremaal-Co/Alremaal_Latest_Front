/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Object } from '../../Object';
import type { UpdateUserDto } from '../../UpdateUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersManagementAdminService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all users with pagination, filtering, sorting, and searching
     * @returns void
     * @throws ApiError
     */
    public usersControllerFindAllV1({
        select,
        filter,
        searchBy,
        search = '',
        sortBy,
        limit = 10,
        page = 1,
    }: {
        /**
         * الحقول المراد إرجاعها
         */
        select?: Array<string>,
        /**
         * فلترة دقيقة، مثال: filter.isActive=$eq:true
         */
        filter?: Object,
        /**
         * الحقول القابلة للبحث
         */
        searchBy?: Array<string>,
        /**
         * بحث عام في جميع الحقول القابلة للبحث
         */
        search?: string,
        /**
         * الترتيب، مثال: name:ASC أو id:DESC
         */
        sortBy?: Array<string>,
        /**
         * عدد العناصر في كل صفحة
         */
        limit?: number,
        /**
         * رقم الصفحة المطلوبة
         */
        page?: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/users',
            query: {
                'select': select,
                'filter': filter,
                'searchBy': searchBy,
                'search': search,
                'sortBy': sortBy,
                'limit': limit,
                'page': page,
            },
            errors: {
                403: `Forbidden resource.`,
            },
        });
    }
    /**
     * Get a single user by ID (Admin)
     * @returns any User data returned successfully.
     * @throws ApiError
     */
    public usersControllerFindOneV1({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden resource.`,
                404: `User not found.`,
            },
        });
    }
    /**
     * Update a user by ID (Admin)
     * @returns any User updated successfully.
     * @throws ApiError
     */
    public usersControllerUpdateV1({
        id,
        requestBody,
    }: {
        id: string,
        requestBody: UpdateUserDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `Forbidden resource.`,
                404: `User not found.`,
            },
        });
    }
    /**
     * Delete a user by ID (Admin)
     * @returns any User deleted successfully.
     * @throws ApiError
     */
    public usersControllerRemoveV1({
        id,
    }: {
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Forbidden resource.`,
                404: `User not found.`,
            },
        });
    }
}
