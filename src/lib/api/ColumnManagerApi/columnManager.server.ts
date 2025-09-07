// This file is auto-generated. For server-side use only.

import { createServerApi } from 'api-core-lib/server';
import { serverApiClient } from '@/lib/api-core/serverApi'; // Assuming a fixed path
import { ColumnManagerApi } from './config';

/**
 * Creates a server-side instance of the ColumnManager API for pre-fetching data in RSC.
 */
export const createColumnManagerServerApi = () => {
  return createServerApi(serverApiClient, ColumnManagerApi);
};