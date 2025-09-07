// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { AuthController_completeProfileRequest, AuthController_requestOtpRequest, AuthController_verifyOtpRequest } from './types';

export const AuthenticationApi: ApiModuleConfig<{
  requestOtp: ActionConfigModule<AuthController_requestOtpRequest, Record<string, any>>;
  verifyOtp: ActionConfigModule<AuthController_verifyOtpRequest, Record<string, any>>;
  refreshToken: ActionConfigModule<undefined, Record<string, any>>;
  completeProfile: ActionConfigModule<AuthController_completeProfileRequest, Record<string, any>>;
  logout: ActionConfigModule<undefined, Record<string, any>>;
  getAdminDashboard: ActionConfigModule<undefined, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/auth/',
  actions: {
    requestOtp: {
      "method": "POST",
      "path": "request-otp",
      "description": "Step 1: Request an OTP for login/registration",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": []
    },
    verifyOtp: {
      "method": "POST",
      "path": "verify-otp",
      "description": "Step 2: Verify OTP and receive tokens",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": []
    },
    refreshToken: {
      "method": "POST",
      "path": "refresh-token",
      "description": "Refresh access token using the httpOnly refresh token cookie",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": true,
      "pathParams": []
    },
    completeProfile: {
      "method": "POST",
      "path": "complete-profile",
      "description": "Step 3 (Optional): Complete user profile",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": true,
      "pathParams": []
    },
    logout: {
      "method": "POST",
      "path": "logout",
      "description": "Log out the current user and invalidate tokens",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": true,
      "pathParams": []
    },
    getAdminDashboard: {
      "method": "GET",
      "path": "admin-dashboard",
      "description": "Example of a highly secure route",
      "hasQuery": false,
      "autoFetch": true,
      "requiresAuth": true,
      "pathParams": []
    }
  },
};