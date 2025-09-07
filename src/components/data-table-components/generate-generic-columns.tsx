"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Checkbox } from "@/components/ui/checkbox";

function formatHeader(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export function generateGenericColumns<TData extends { id: any }>(
  data: TData[]
): ColumnDef<TData>[] {
  if (!data || data.length === 0) {
    return [];
  }

  const sampleData = data[0];
  const keys = Object.keys(sampleData) as (keyof TData)[];

  const columns: ColumnDef<TData>[] = keys.map((key) => {
    const header = formatHeader(String(key));
    
    return {
      accessorKey: String(key),
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={header} />
      ),
      cell: ({ row }) => {
        const value = row.getValue(String(key));
        if (typeof value === 'boolean') {
          return <Checkbox checked={value} disabled />;
        }
        if (value instanceof Date) {
          return value.toLocaleDateString();
        }
        return <div className="truncate">{String(value)}</div>;
      },
    };
  });
  
  columns.push({
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  });

  columns.unshift({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  });


  return columns;
}