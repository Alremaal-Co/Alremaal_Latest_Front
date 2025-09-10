// This file is auto-generated. Do not edit directly.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule, UseApiModuleOptions } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi'; // Assuming a fixed path
import { ProfileApi, ProfileApi as TModuleType } from './config';

// 1. Create the strongly-typed context, provider, and consumer hook
const { 
  Provider, 
  useContext: useProfileContext 
} = createApiModuleContext<typeof TModuleType['actions']>();

export { useProfileContext };

// 2. Create a custom Provider that encapsulates the useApiModule logic
type Options = Parameters<typeof useApiModule>[2];

interface ProfileProviderProps {
  children: React.ReactNode;
  options?: Options;
}

/**
 * A dedicated React Provider that initializes and provides the Profile API context.
 */
export function ProfileProvider({ children, options = {} }: ProfileProviderProps) {
  const api = useApiModule(apiClient, ProfileApi, options);
  return <Provider value={api}>{children}</Provider>;
}