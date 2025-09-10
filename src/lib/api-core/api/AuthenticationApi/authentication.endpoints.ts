// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { AuthController_requestOtpRequest, AuthController_verifyOtpRequest, AuthController_completeProfileRequest } from './types';

export const authenticationEndpoints = {
  /**
   * POST /api/v1/auth/request-otp
   * Step 1: Request an OTP for login/registration
   */
  requestOtp: (body: AuthController_requestOtpRequest) => ({
    action: 'requestOtp' as const,
    input: body,
  }),

  /**
   * POST /api/v1/auth/verify-otp
   * Step 2: Verify OTP and receive tokens
   */
  verifyOtp: (body: AuthController_verifyOtpRequest) => ({
    action: 'verifyOtp' as const,
    input: body,
  }),

  /**
   * POST /api/v1/auth/refresh-token
   * Refresh access token using the httpOnly refresh token cookie
   */
  refreshToken: () => ({
    action: 'refreshToken' as const,
  }),

  /**
   * POST /api/v1/auth/complete-profile
   * Step 3 (Optional): Complete user profile
   */
  completeProfile: (body: AuthController_completeProfileRequest) => ({
    action: 'completeProfile' as const,
    input: body,
  }),

  /**
   * POST /api/v1/auth/logout
   * Log out the current user and invalidate tokens
   */
  logout: () => ({
    action: 'logout' as const,
  }),

  /**
   * GET /api/v1/auth/admin-dashboard
   * Example of a highly secure route
   */
  getAdminDashboard: () => ({
    action: 'getAdminDashboard' as const,
  }),

};