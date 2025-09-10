// This file is auto-generated. Do not edit directly.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi'; // Assuming a fixed path
import { TableManagerApi, TableManagerApi as TModuleType } from './config';

// 1. Create the strongly-typed context, provider, and consumer hook
const { 
  Provider, 
  useContext: useTableManagerContext 
} = createApiModuleContext<typeof TModuleType['actions']>();

export { useTableManagerContext };

// 2. Create a custom Provider that encapsulates the useApiModule logic
type Options = Parameters<typeof useApiModule>[2];

interface TableManagerProviderProps {
  children: React.ReactNode;
  options?: Options;
}

/**
 * A dedicated React Provider that initializes and provides the TableManager API context.
 */
export function TableManagerProvider({ children, options = {} }: TableManagerProviderProps) {
  const api = useApiModule(apiClient, TableManagerApi, options);
  return <Provider value={api}>{children}</Provider>;
}