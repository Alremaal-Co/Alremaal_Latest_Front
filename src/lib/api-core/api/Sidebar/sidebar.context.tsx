// Auto-generated file. Do not edit.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi';
import { Sidebar, Sidebar as TModuleType } from './config';

const { Provider, useContext: useSidebarContext } = createApiModuleContext<typeof TModuleType['actions']>();

export { useSidebarContext };

type Options = Parameters<typeof useApiModule>[2];

interface SidebarProviderProps {
  children: React.ReactNode;
  options?: Options;
}

export function SidebarProvider({ children, options = {} }: SidebarProviderProps) {
  const api = useApiModule(apiClient, Sidebar, options);
  return <Provider value={api}>{children}</Provider>;
}