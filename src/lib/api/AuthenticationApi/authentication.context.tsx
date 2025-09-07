// This file is auto-generated. Do not edit directly.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi'; // Assuming a fixed path
import { AuthenticationApi, AuthenticationApi as TModuleType } from './config';

// 1. Create the strongly-typed context, provider, and consumer hook
const { 
  Provider, 
  useContext: useAuthenticationContext 
} = createApiModuleContext<typeof TModuleType['actions']>();

export { useAuthenticationContext };

// 2. Create a custom Provider that encapsulates the useApiModule logic
type Options = Parameters<typeof useApiModule>[2];

interface AuthenticationProviderProps {
  children: React.ReactNode;
  options?: Options;
}

/**
 * A dedicated React Provider that initializes and provides the Authentication API context.
 */
export function AuthenticationProvider({ children, options = {} }: AuthenticationProviderProps) {
  const api = useApiModule(apiClient, AuthenticationApi, options);
  return <Provider value={api}>{children}</Provider>;
}