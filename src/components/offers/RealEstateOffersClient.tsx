"use client";
import { DynamicDataOperationsProvider } from "@/lib/api/DynamicDataOperationsApi";
import { SmartDataTable } from "../tables";
import { columnManagerEndpoints, ColumnManagerProvider } from "@/lib/api/ColumnManagerApi";
import { PageHeaderWithStats } from "../Admin/pages/header.pages.temp/PageHeaderWithStats";
import { pageDataSchema } from "../Admin/pages/header.pages.temp/schma.header.pages.temp/list.schema.header.pages.temp";
import { pageDataSchemaOffers } from "../Admin/pages/header.pages.temp/schma.header.pages.temp/list.schema.header.pages.offers";
interface ClientProps {
  dehydratedState: string;
  endpointName: string;
}
export function RealEstateOffersClient({
  dehydratedState,
  endpointName
}: ClientProps) {

  const hh = columnManagerEndpoints.getColumns({endpointName})
  console.log("hhhhhhhhhhhhhhhh" , hh)
  return (
    <DynamicDataOperationsProvider
      options={{
        hydratedState:dehydratedState,
        pathParams: { endpointName },
        // extraContextData:{
        //   endpointName:endpointName
        // },
        onError(actionName, message, error) {
          
        },
        onSuccess(actionName, message, data) {
          // console.log("")
        },
      }}
    >
      <ColumnManagerProvider options={{
        onSuccess(actionName, message, data) {
          
        },
        onError(actionName, message, error) {
          
        },
        enabled:!false,

          pathParams: { endpointName }
      }}>
        <PageHeaderWithStats schema={pageDataSchemaOffers} />
        <SmartDataTable endpointName={endpointName} />
      </ColumnManagerProvider>
    </DynamicDataOperationsProvider>
  );
}


    // <DynamicDataOperationsProvider
    //   options={{
    //     hydratedState:dehydratedState,
    //     pathParams: { endpointName }
    //   }}
    // >
    //   <SmartDataTable endpointName={endpointName} />
    // </DynamicDataOperationsProvider>

























// "use client";

// import { ApiModuleProvider, useApiModule } from 'api-core-lib/client';
// import { realEstateOffersModule } from '@/lib/api-core/modules/realEstateOffers.module';
// import { apiClient } from '@/lib/api-core/clientApi';
// import { AddOfferForm } from './AddOfferForm';
// import { OfferList } from './OfferList';
// import { toast } from 'sonner';
// import { useEffect } from 'react';
// import { TableManagerApi } from '@/lib/api/TableManagerApi';

// /**
//  * @typedef {object} RealEstateOffersClientProps
//  * @property {string} hydratedState - The dehydrated state string from the server, used to
//  *   hydrate the client-side cache for a zero-fetch initial render.
//  */

// /**
//  * @component RealEstateOffersClient
//  * @description
//  *   A client-side container that initializes and provides the API module for real estate offers.
//  *   It handles SSR state hydration, configures global side-effects like notifications,
//  *   and makes the API context available to all descendant components.
//  *
//  * @param {RealEstateOffersClientProps} props The component's props.
//  * @returns {JSX.Element} The provider-wrapped UI for the real estate offers page.
//  */
// export function RealEstateOffersClient({ hydratedState }: { hydratedState: string }) {

//   const api = useApiModule(apiClient, TableManagerApi, {
//     pathParams: { endpointName: 'real-estate-offers' },
//     hydratedState: hydratedState,
//     refetchOnWindowFocus: true,

//     onError(actionName, message) {
//       toast.error(`Error in "${actionName}": ${message}`);
//     },
    
//     onSuccess(actionName, message) {
//       toast.success(`Success in "${actionName}": ${message}`);
//     },
//   });

//   /**
//    * @dev
//    *   Debug effect to monitor the state of the 'list' action.
//    *   Logs changes to data, loading, and error states.
//    */
//   useEffect(() => {
//     console.log("State [list]:", api.states.list);
//   }, [api.states.list]);

//   return (
//     <ApiModuleProvider value={api}>
//       <div className="space-y-8">
//         <AddOfferForm />
//         <OfferList />
//       </div>
//     </ApiModuleProvider>
//   );
// }