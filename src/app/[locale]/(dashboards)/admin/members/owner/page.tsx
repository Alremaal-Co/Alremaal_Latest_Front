import { MemberIndex } from "@/components/Admin/pages/Member";
import { createDynamicDataOperationsServerApi } from "@/lib/api/DynamicDataOperationsApi/dynamicDataOperations.server";



export default async function MemberPage() {
  const serverApi = createDynamicDataOperationsServerApi();
  const endpointName = "real-estate-offers";
  const __input = {page: 1, limit: 10 }
  const __options = {
    pathParams: { endpointName }
  }

  await serverApi.prefetch("findAll", __input,__options);

  const dehydratedState = serverApi?.dehydrate();
  console.log("dehydratedState" , dehydratedState)

  return (
    <MemberIndex
      dehydratedState={dehydratedState}
      endpointName={endpointName}
    />
  );
}
