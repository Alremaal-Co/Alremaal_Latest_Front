// This file is auto-generated. Do not edit directly.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi'; // Assuming a fixed path
import { ColumnManagerApi, ColumnManagerApi as TModuleType } from './config';

// 1. Create the strongly-typed context, provider, and consumer hook
const { 
  Provider, 
  useContext: useColumnManagerContext 
} = createApiModuleContext<typeof TModuleType['actions']>();

export { useColumnManagerContext };

// 2. Create a custom Provider that encapsulates the useApiModule logic
type Options = Parameters<typeof useApiModule>[2];

interface ColumnManagerProviderProps {
  children: React.ReactNode;
  options?: Options;
}

/**
 * A dedicated React Provider that initializes and provides the ColumnManager API context.
 */
export function ColumnManagerProvider({ children, options = {} }: ColumnManagerProviderProps) {
  const api = useApiModule(apiClient, ColumnManagerApi, options);
  return <Provider value={api}>{children}</Provider>;
}