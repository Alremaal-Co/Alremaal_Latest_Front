
import { TokenManager } from 'api-core-lib';

/**
 * A "dummy" token manager for APIs that are entirely public
 * and do not require any authentication.
 */
export const publicApiTokenManager: TokenManager = {
  getTokens: async () => Promise.resolve({ accessToken: null, refreshToken: null }),  
  setTokens: async () => {},
  clearTokens: async () => {},
  isHttpOnly: () => false, 
};

