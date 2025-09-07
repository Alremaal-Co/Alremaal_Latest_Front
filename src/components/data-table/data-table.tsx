"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { DataTableCore } from "./data-table-core";
import { ApiState, DataTableConfig } from "./types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSkeleton } from "../data-table-components/data-table-skeleton";
import { ActionState } from "api-core-lib";

interface DataTableProps<TData> {
  apiState: ActionState<any>
  config: DataTableConfig<TData>;
}

export function DataTable<TData>({
  apiState,
  config
}: DataTableProps<TData>) {
  const { data, loading, error, message, meta, links ,called , success } = apiState;

  if (loading && (!data || data.length === 0)) {
    return <DataTableSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-4">
        <Terminal className="h-4 w-4" />
        <AlertTitle>An Error Occurred</AlertTitle>
        <AlertDescription>
          {message || "Failed to load data. Please try again later."}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <DataTableCore
      data={data || []}
      columns={config.columns as ColumnDef<TData, any>[]}
      config={config}
      meta={meta}
      links={links}
    />
  );
}