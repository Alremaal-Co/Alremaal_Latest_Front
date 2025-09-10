// Auto-generated file. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi';
import { Files } from './config';

export const createFilesServerApi = () => {
  return createServerApi(serverApiClient, Files);
};