import React from 'react'

export default function page() {
  return (
    <div>
      
    </div>
  )
}

// // This is a React Server Component (RSC)

// import { createTableManagerServerApi } from "@/lib/api/TableManagerApi/tableManager.server";
// import { tableManagerEndpoints } from "@/lib/api/TableManagerApi/tableManager.endpoints";
// import { TablesManagerPlayground } from "@/components/tables";


// export default async function TablesAdminPage() {
//   const serverApi = createTableManagerServerApi();
//   const { action, input } = tableManagerEndpoints.findAll({ limit: 20 });
//   await serverApi.prefetch(action, input);
//   const dehydratedState = serverApi.dehydrate();

//   return (
//     <main className="bg-gray-50 min-h-screen p-4 sm:p-8 ">
//       <div className="max-w-7xl mx-auto ">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Table Manager Playground</h1>
//         <p className="text-gray-600 mb-8">
//           A comprehensive component to test all functionalities of the TableManager API module.
//         </p>
//         <TablesManagerPlayground dehydratedState={dehydratedState} />
//       </div>
//     </main>
//   );
// }