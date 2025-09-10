// This file is auto-generated. Do not edit directly.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';
import type { ProfileController_updateProfileRequest } from './types';

export const ProfileApi: ApiModuleConfig<{
  getProfile: ActionConfigModule<undefined, Record<string, any>>;
  updateProfile: ActionConfigModule<ProfileController_updateProfileRequest, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/profile/',
  actions: {
    getProfile: {
      "method": "GET",
      "path": "me",
      "description": "Get current logged-in user profile",
      "hasQuery": false,
      "autoFetch": true,
      "requiresAuth": true,
      "pathParams": []
    },
    updateProfile: {
      "method": "PATCH",
      "path": "me",
      "description": "Update current logged-in user profile",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": true,
      "pathParams": []
    }
  },
};