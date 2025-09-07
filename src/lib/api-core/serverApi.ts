// src/lib/api/serverApi.ts
import { createApiClient } from 'api-core-lib'; 
import { serverTokenManager } from "./tokenManager/server";

export const serverApiClient = createApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL!,
  tokenManager: serverTokenManager,
  withCredentials: true,
  timeout: 15000,
});
 