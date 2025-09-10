// Auto-generated file. Do not edit.

import type { ApiModuleConfig, ActionConfigModule, QueryOptions } from 'api-core-lib';

export const Files: ApiModuleConfig<{
  uploadFile: ActionConfigModule<undefined, Record<string, any>>;
}> = {
  baseEndpoint: '/api/v1/files/upload',
  actions: {
    uploadFile: {
      "method": "POST",
      "path": "/",
      "description": "",
      "hasQuery": false,
      "autoFetch": false,
      "requiresAuth": false,
      "pathParams": []
    }
  },
};