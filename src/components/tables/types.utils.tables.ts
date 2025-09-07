//================================================================================================
// TYPES & CONFIG INTERFACES
//================================================================================================

import { CellType } from "./generateDynamicColumns";

export interface FacetedFilterOption {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FacetedFilterConfig<TData> {
  columnId: keyof TData;
  title: string;
  options: FacetedFilterOption[];
}

export interface DataTableConfig<TData> {
  searchColumn?: keyof TData;
  searchPlaceholder?: string;
  dateFilterColumn?: keyof TData;
  facetedFilters?: FacetedFilterConfig<TData>[];
  enableSoftDeleteFilter?: boolean;
}



export interface ViewOptions {
  density?: 'compact' | 'standard' | 'comfortable';
  isStriped?: boolean;
  hasBorders?: boolean;
  isStickyHeader?: boolean;
  enableHover?: boolean;
  truncateText?: boolean;
}

export interface SmartDataTableProps<TData> {
  endpointName: string;
  config?: DataTableConfig<TData>;
  defaultViewOptions?: ViewOptions; 
}




export interface ColumnSchemaConfig<TData> {
  header?: string;
  cellType?: CellType;
  enableSorting?: boolean;
  enableHiding?: boolean;
  enableResizing?: boolean;
  size?: number;
  meta?: { [key: string]: any };
}

export type TableSchema<TData> = {
  [key in keyof TData]?: ColumnSchemaConfig<TData>;
};



export interface ViewOptions {
  density?: 'compact' | 'standard' | 'comfortable';
  isStriped?: boolean;
  hasBorders?: boolean;
  isStickyHeader?: boolean;
  enableHover?: boolean;
  truncateText?: boolean;
}

