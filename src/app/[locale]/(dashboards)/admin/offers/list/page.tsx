import { RealEstateOffersClient } from "@/components/offers/RealEstateOffersClient";
import { createDynamicDataOperationsServerApi } from "@/lib/api/DynamicDataOperationsApi/dynamicDataOperations.server";



export default async function RealEstateOffersPage() {
  const serverApi = createDynamicDataOperationsServerApi();
  const endpointName = "real-estate-offers";
  const __input = {page: 1, limit: 10 }
  const __options = {
    pathParams: { endpointName }
  }

  await serverApi.prefetch("findAll", __input,__options);

  const dehydratedState = serverApi.dehydrate();
  console.log("dehydratedState" , dehydratedState)

  return (
    <RealEstateOffersClient
      dehydratedState={dehydratedState}
      endpointName={endpointName}
    />
  );
}



// import ExpensesPage from "@/components/data-table";
// import { RealEstateOffersClient } from "@/components/offers/RealEstateOffersClient";
// import { realEstateOffersModule } from "@/lib/api-core/modules/realEstateOffers.module";
// import { serverApiClient } from "@/lib/api-core/serverApi";
// import { TableManagerApi } from "@/lib/api/TableManagerApi";
// import { createServerApi } from 'api-core-lib/server';

// /**   
//  * @component RealEstateOffersPage
//  * @description
//  *   A Next.js Server Component serving as the entry point for the `/real-estate-offers` route.
//  *   Its primary responsibility is to pre-fetch the initial data on the server to enable
//  *   instant page loads (SSR) and then pass it to a client component for hydration.
//  *
//  * @async
//  * @returns {Promise<JSX.Element>} A promise that resolves to the page's JSX content.
//  *
//  * @workflow
//  *   1. **Pre-fetches** the initial list of real estate offers via `serverApi`.
//  *   2. **Dehydrates** the server-side cache state into a serialized string.
//  *   3. **Renders** the `RealEstateOffersClient`, passing the state for client-side hydration.
//  */
// export default async function RealEstateOffersPage() {
//   const serverApi = createServerApi(serverApiClient, TableManagerApi);

//   // Pre-fetch the first page of data on the server before rendering.
//   await serverApi.prefetch("findAll", { page: 1, limit: 100 }, { 
//     // pathParams: { endpointName: 'real-estate-offers' } 
//   });
  
//   // Serialize the pre-fetched data into a string to be passed to the client.
//   const dehydratedState = serverApi.dehydrate();

//   return (
//     <main>
//       {/* <h1>Real Estate Offers</h1> */}
//       <ExpensesPage hydratedState={dehydratedState} />
//     </main>
//   );
// }



