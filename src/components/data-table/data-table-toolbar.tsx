"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolbarConfig } from "./types";
import { DataTableFacetedFilter } from "../data-table-components/data-table-faceted-filter";
import { DataTableViewOptions } from "../data-table-components/data-table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toolbarConfig: ToolbarConfig<TData>;
}

export function DataTableToolbar<TData>({
  table,
  toolbarConfig
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const searchColumnId = String(toolbarConfig.searchColumn);

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder={toolbarConfig.searchPlaceholder || `Filter by ${searchColumnId}...`}
          value={
            (table.getColumn(searchColumnId)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(searchColumnId)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {toolbarConfig.facetedFilters?.map((filter) => {
          const column = table.getColumn(String(filter.columnId));
          if (column) {
            return (
              <DataTableFacetedFilter
                key={String(filter.columnId)}
                column={column}
                title={filter.title}
                options={filter.options}
              />
            );
          }
          return null;
        })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}