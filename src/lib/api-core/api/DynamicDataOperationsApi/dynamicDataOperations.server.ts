// This file is auto-generated. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi'; // Assuming a fixed path
import { DynamicDataOperationsApi } from './config';

/**
 * Creates a server-side instance of the DynamicDataOperations API for pre-fetching data in RSC.
 */
export const createDynamicDataOperationsServerApi = () => {
  return createServerApi(serverApiClient, DynamicDataOperationsApi);
};