// This file is auto-generated. Do not edit directly.
'use client';

import React from 'react';
import { createApiModuleContext, useApiModule } from 'api-core-lib/client';
import { apiClient } from '@/lib/api-core/clientApi'; // Assuming a fixed path
import { DynamicDataOperationsApi, DynamicDataOperationsApi as TModuleType } from './config';

// 1. Create the strongly-typed context, provider, and consumer hook
const { 
  Provider, 
  useContext: useDynamicDataOperationsContext 
} = createApiModuleContext<typeof TModuleType['actions']>();

export { useDynamicDataOperationsContext };

// 2. Create a custom Provider that encapsulates the useApiModule logic
type Options = Parameters<typeof useApiModule>[2];

interface DynamicDataOperationsProviderProps {
  children: React.ReactNode;
  options?: Options;
}

/**
 * A dedicated React Provider that initializes and provides the DynamicDataOperations API context.
 */
export function DynamicDataOperationsProvider({ children, options = {} }: DynamicDataOperationsProviderProps) {
  const api = useApiModule(apiClient, DynamicDataOperationsApi, options);
  console.log("api" , api.states.findAll.called)
  // console.log("options" , api.queries.findAll.options.fggf)
  return <Provider value={api}>{children}</Provider>;
}







// 'use client';

// import { createApiModuleContext } from 'api-core-lib/client';
// import { DynamicDataOperationsApi as TModuleType } from './config';

// // 1. عرف شكل بياناتك الإضافية
// interface ExtraContextData {
//   endpointName: string;
//   pageTitle?: string;
// }

// // 2. مرر هذا النوع إلى الدالة عند الإنشاء
// const { 
//   Provider, 
//   useContext: useDynamicDataOperationsContext 
// } = createApiModuleContext<typeof TModuleType['actions'], ExtraContextData>();

// export { useDynamicDataOperationsContext };