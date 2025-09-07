// This file is auto-generated. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi'; // Assuming a fixed path
import { AuthenticationApi } from './config';

/**
 * Creates a server-side instance of the Authentication API for pre-fetching data in RSC.
 */
export const createAuthenticationServerApi = () => {
  return createServerApi(serverApiClient, AuthenticationApi);
};