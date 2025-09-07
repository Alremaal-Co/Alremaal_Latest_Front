/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompleteProfileDto } from '../../CompleteProfileDto';
import type { RequestOtpDto } from '../../RequestOtpDto';
import type { VerifyOtpDto } from '../../VerifyOtpDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthenticationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Step 1: Request an OTP for login/registration
     * @returns any OTP sent successfully.
     * @throws ApiError
     */
    public authControllerRequestOtpV1({
        requestBody,
    }: {
        requestBody: RequestOtpDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/request-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                429: `Too Many Requests.`,
            },
        });
    }
    /**
     * Step 2: Verify OTP and receive tokens
     * @returns any Returns tokens and profile status.
     * @throws ApiError
     */
    public authControllerVerifyOtpV1({
        requestBody,
    }: {
        requestBody: VerifyOtpDto,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/verify-otp',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid or expired OTP.`,
            },
        });
    }
    /**
     * Refresh access token using the httpOnly refresh token cookie
     * @returns any New access token generated.
     * @throws ApiError
     */
    public authControllerRefreshTokenV1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/refresh-token',
            errors: {
                403: `Access Denied. Invalid refresh token.`,
            },
        });
    }
    /**
     * Step 3 (Optional): Complete user profile
     * @returns void
     * @throws ApiError
     */
    public authControllerCompleteProfileV1({
        requestBody,
    }: {
        requestBody: CompleteProfileDto,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/complete-profile',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized. Invalid or missing token.`,
                403: `Forbidden. Insufficient permissions or incomplete profile.`,
            },
        });
    }
    /**
     * Log out the current user and invalidate tokens
     * @returns void
     * @throws ApiError
     */
    public authControllerLogoutV1(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/auth/logout',
            errors: {
                401: `Unauthorized. Invalid or missing token.`,
                403: `Forbidden. Insufficient permissions or incomplete profile.`,
            },
        });
    }
    /**
     * Example of a highly secure route
     * @returns void
     * @throws ApiError
     */
    public authControllerGetAdminDashboardV1(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/auth/admin-dashboard',
            errors: {
                401: `Unauthorized. Invalid or missing token.`,
                403: `Forbidden. Insufficient permissions or incomplete profile.`,
            },
        });
    }
}
