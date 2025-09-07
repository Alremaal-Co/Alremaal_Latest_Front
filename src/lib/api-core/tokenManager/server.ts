/**
 * A TokenManager specifically for Server-Side environments (Server Components, Actions, API Routes).
 * It directly reads tokens from the incoming request's httpOnly cookies.
 */
import { cookies } from 'next/headers';
import { TokenManager } from 'api-core-lib';

export const serverTokenManager: TokenManager = {
  // Reads tokens directly from the server-side cookie store
  getTokens: async () => {
    const cookieStore = await cookies();
    return {
      accessToken: cookieStore.get('accessToken')?.value || null,
      refreshToken: cookieStore.get('refreshToken')?.value || null,
    };
  },

  // Setting/clearing tokens is handled by Server Actions, not the manager itself.
  setTokens: async () => { 
    throw new Error("setTokens should be handled directly within Server Actions, not via serverTokenManager.");
  },
  clearTokens: async () => {
    throw new Error("clearTokens should be handled directly within Server Actions, not via serverTokenManager.");
  },

  // It's technically httpOnly, but since we are on the server, we can read it.
  // We'll return false so the interceptor attempts to add the Authorization header.
  isHttpOnly: () => false, 
};