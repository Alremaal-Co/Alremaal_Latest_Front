import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export interface FacetedFilterConfig {
  columnId: keyof TData;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export interface ToolbarConfig<TData> {
  searchColumn: keyof TData;
  searchPlaceholder?: string;
  facetedFilters?: FacetedFilterConfig<TData>[];
}

export interface DataTableConfig<TData> {
  columns: ColumnDef<TData, any>[];
  toolbar: ToolbarConfig<TData>;
}

export interface ApiState<TData> {
  data?: TData[];
  loading?: boolean;
  error?: boolean;
  message?: string;
  meta?: any;
  links?: any;
}