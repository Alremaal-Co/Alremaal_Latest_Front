// Auto-generated file. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi';
import { Sidebar } from './config';

export const createSidebarServerApi = () => {
  return createServerApi(serverApiClient, Sidebar);
};