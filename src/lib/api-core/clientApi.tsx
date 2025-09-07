
// import { createApiClient } from 'api-core-lib';
import { createApiClient } from 'api-core-lib';
import { publicApiTokenManager } from './tokenManager/browser';

/**
 * Middleware to measure and log the duration of each API request.
 * - Logs request method, URL, status, and execution time.
 * - Warns for failed requests or slow responses.
 */
const timingMiddleware = async (context: any, next: () => Promise<void>) => {
  const startTime = Date.now();
  try {
    await next();
  } catch (err) {
    context.error = err;
  } finally {
    const duration = Date.now() - startTime;
    const method = context.req?.method?.toUpperCase() || 'UNKNOWN';
    const url = context.req?.url || '[NO_URL]';
    const status = context.res?.status || context.error?.status || 'N/A';
    const requestId = context.req?.headers?.['X-Request-ID'] || 'N/A';

    const logMessage = `[API] [${requestId}] ${method} ${url} - Status: ${status} - Duration: ${duration}ms`;

    if (context.error || duration > 2000) {
      console.warn(`${logMessage}${duration > 2000 ? ' [SLOW REQUEST]' : ''}`);
    } else {
      console.info(logMessage);
    }
  }
};



export const apiClient = createApiClient({
  tokenManager: publicApiTokenManager,
  middleware: [timingMiddleware],
  timeout: 155000,
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  
  // defaultIsPublic: false,

});

