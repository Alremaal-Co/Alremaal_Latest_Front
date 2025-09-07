import { ColumnDef } from "@tanstack/react-table";
import React from "react";

interface FacetedFilterConfig {
  columnId: string;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface ToolbarConfig {
  searchColumn: string;
  searchPlaceholder?: string;
  facetedFilters: FacetedFilterConfig[];
}

export interface DataTableConfig<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[] | (() => ColumnDef<TData, TValue>[]);
  toolbar: ToolbarConfig;
}