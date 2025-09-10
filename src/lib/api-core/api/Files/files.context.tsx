// Auto-generated file. Do not edit.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi';
import { Files, Files as TModuleType } from './config';

const { Provider, useContext: useFilesContext } = createApiModuleContext<typeof TModuleType['actions']>();

export { useFilesContext };

type Options = Parameters<typeof useApiModule>[2];

interface FilesProviderProps {
  children: React.ReactNode;
  options?: Options;
}

export function FilesProvider({ children, options = {} }: FilesProviderProps) {
  const api = useApiModule(apiClient, Files, options);
  return <Provider value={api}>{children}</Provider>;
}