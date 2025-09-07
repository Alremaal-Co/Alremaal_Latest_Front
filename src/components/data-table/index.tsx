

"use client";

import { useApiModule } from "api-core-lib/client";
import { apiClient } from "@/lib/api-core/clientApi";
import { TableManagerApi } from "@/lib/api/TableManagerApi";
import { toast } from "sonner";
import { DataTable } from "@/components/data-table/data-table";
import { DataTableConfig } from "@/components/data-table/types";
import { categories, incomeType } from "@/components/data-table-components/data"; 
import { Expense } from "@/components/data-table-components/schema";
import { expenseColumns } from "@/components/data-table/columns";

export default function ExpensesPage({hydratedState}:{hydratedState:string}) {
//   const endpointName = 'expenses'; // Example endpoint
  
  const api = useApiModule(apiClient, TableManagerApi, {
    // pathParams: { endpointName: 'real-estate-offers' },
    hydratedState: hydratedState,
    // refetchOnWindowFocus: true,

    onError(actionName, message) {
      toast.error(`Error in "${actionName}": ${message}`);
    },
    
    onSuccess(actionName, message) {
      toast.success(`Success in "${actionName}": ${message}`);
    },
  });

  const tableConfig: DataTableConfig<Expense> = {
    columns: expenseColumns,
    toolbar: {
      searchColumn: 'note',
      searchPlaceholder: 'Filter by note...',
      facetedFilters: [
        {
          columnId: 'category',
          title: 'Category',
          options: categories,
        },
        {
          columnId: 'type',
          title: 'Type',
          options: incomeType,
        },
      ],
    },
  };

  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      {/* <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Expenses</h2>
      </div> */}
      <DataTable
        apiState={api.states.findAll}
        config={tableConfig}
      />
    </div>
  );
}