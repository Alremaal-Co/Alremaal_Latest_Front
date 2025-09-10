// This file is auto-generated. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi'; // Assuming a fixed path
import { UsersManagementAdminApi } from './config';

/**
 * Creates a server-side instance of the UsersManagementAdmin API for pre-fetching data in RSC.
 */
export const createUsersManagementAdminServerApi = () => {
  return createServerApi(serverApiClient, UsersManagementAdminApi);
};