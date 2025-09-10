// This file is auto-generated. Do not edit directly.

import type { QueryOptions } from 'api-core-lib';
import type { ProfileController_updateProfileRequest } from './types';

export const profileEndpoints = {
  /**
   * GET /api/v1/profile/me
   * Get current logged-in user profile
   */
  getProfile: () => ({
    action: 'getProfile' as const,
  }),

  /**
   * PATCH /api/v1/profile/me
   * Update current logged-in user profile
   */
  updateProfile: (body: ProfileController_updateProfileRequest) => ({
    action: 'updateProfile' as const,
    input: body,
  }),

};