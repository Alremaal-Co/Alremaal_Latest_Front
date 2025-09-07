"use client";
import { DynamicDataOperationsProvider } from "@/lib/api/DynamicDataOperationsApi";
import { ColumnManagerProvider } from "@/lib/api/ColumnManagerApi";
import { PageHeaderWithStats } from "../header.pages.temp/PageHeaderWithStats";
import { SmartDataTable } from "@/components/tables";
import { pageDataSchema } from "../header.pages.temp/schma.header.pages.temp/list.schema.header.pages.temp";
interface ClientProps {
  dehydratedState: string;
  endpointName: string;
}
export function MemberIndex({
  dehydratedState,
  endpointName
}: ClientProps) {

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
        enabled:false,
          pathParams: { endpointName }
      }}>
        <PageHeaderWithStats schema={pageDataSchema} />
        <SmartDataTable endpointName={endpointName} />
      </ColumnManagerProvider>
    </DynamicDataOperationsProvider>
  );
}
