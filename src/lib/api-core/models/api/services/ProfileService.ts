/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateProfileDto } from '../../UpdateProfileDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProfileService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get current logged-in user profile
     * @returns any Successfully retrieved user profile.
     * @throws ApiError
     */
    public profileControllerGetProfileV1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/profile/me',
            errors: {
                401: `Unauthorized.`,
            },
        });
    }
    /**
     * Update current logged-in user profile
     * @returns any Profile updated successfully.
     * @throws ApiError
     */
    public profileControllerUpdateProfileV1({
        requestBody,
    }: {
        requestBody: UpdateProfileDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/v1/profile/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request (e.g., invalid email).`,
                401: `Unauthorized.`,
            },
        });
    }
}
