"use client";

import { ColumnDef } from "@tanstack/react-table";
import { formatHeader } from "./utils";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { SmartCellRenderer } from "./SmartCellRenderer";
import { useColumnManagerContext } from "@/lib/api/ColumnManagerApi";

export interface ColumnGenerationConfig {
  hiddenColumns?: string[];
  lang?: 'en' | 'ar';
}

export type CellType = 'default' | 'currency' | 'date' | 'status' | 'image' | 'badge';

export interface ColumnSchemaConfig<TData> {
  header?: string;          
  cellType?: CellType;       
  enableSorting?: boolean;
  enableHiding?: boolean;
  enableResizing?: boolean;
  enableColumnFilter?: boolean;
  enablePinning?: boolean;
  size?: number;
  minSize?: number;
  maxSize?: number;
  meta?: {
    [key: string]: any;
  };
}

export type TableSchema<TData> = {
  [key in keyof TData]?: ColumnSchemaConfig<TData>;
};

interface ApiColumn {
  id: string;
  columnName: string;
  labelAr: string;
  labelEn: string;
  dataType: string;
  isNullable: boolean;
  isSearchable: boolean;
  isFilterable: boolean;
  isSortable: boolean;
  isSelectable: boolean;
  hasDefault: boolean;
  isRelation: boolean;
  relatedTableId: string | null;
  onDeleteAction: string | null;
  isUnique: boolean;
  max: number;
  min: number;
  relatedTableEndpoint: string;
}

const buildColumnsFromApiSchema = <TData extends { id: any }>(
  apiSchema: ApiColumn[],
  lang: 'en' | 'ar'
): ColumnDef<TData>[] => {
  return apiSchema
    .filter(col => col.isSelectable)
    .map((colSchema) => {
      const headerLabel = lang === 'ar' ? colSchema.labelAr : colSchema.labelEn;

      return {
        id: colSchema.columnName,
        accessorKey: colSchema.columnName,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={headerLabel.toUpperCase()}
          />
        ),
        cell: SmartCellRenderer,
        enableSorting: colSchema.isSortable,
        enableHiding: true,
        enableColumnFilter: colSchema.isFilterable,
        meta: {
          labelAr: colSchema.labelAr,
          labelEn: colSchema.labelEn,
          dataType: colSchema.dataType,
        },
      };
    });
};

export const generateDynamicColumns = <TData extends { id: any }>(
  data: TData[],
  schema: TableSchema<TData> = {},
  columnApiState: ReturnType<typeof useColumnManagerContext>['states']['getColumns'],
  config: ColumnGenerationConfig = {}
): ColumnDef<TData>[] => {
  const lang = config.lang || 'en';

  if (columnApiState.success && columnApiState.data && columnApiState.data.length > 0) {
    return buildColumnsFromApiSchema(columnApiState?.data, lang);
  }

  if (!data || data.length === 0) return [];

  const sample = data[0];
  const keys = Object.keys(sample) as (keyof TData)[];
  const defaultHidden = ['deleted_at'];
  const finalHiddenColumns = [...defaultHidden, ...(config.hiddenColumns || [])];

  const columns: ColumnDef<TData>[] = keys
    .filter(key => !finalHiddenColumns.includes(String(key)))
    .map((key) => {
      const keyString = String(key);
      const customConfig = schema[key] || {};
      
      let smartCellType: CellType = 'default';
      if (keyString.toLowerCase().includes('date') || keyString.toLowerCase().endsWith('_at')) smartCellType = 'date';
      else if (keyString.toLowerCase().includes('price') || keyString.toLowerCase().includes('amount')) smartCellType = 'currency';
      else if (keyString.toLowerCase().includes('status')) smartCellType = 'status';
      else if (keyString.toLowerCase().includes('image') || keyString.toLowerCase().includes('avatar')) smartCellType = 'image';

      const finalConfig: ColumnDef<TData> = {
        id: keyString,
        accessorKey: keyString,
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title={(customConfig.header || formatHeader(keyString)).toUpperCase()}
          />
        ),
        cell: SmartCellRenderer,
        enableSorting: true,
        enableHiding: true,
        enableResizing: true,
        enableColumnFilter: true,
        enablePinning: true,
        ...customConfig,
        meta: {
          cellType: customConfig.cellType || smartCellType,
          ...customConfig.meta,
        },
      };
      
      return finalConfig;
    });

  return columns;
};














// import { ColumnDef } from "@tanstack/react-table";
// import { formatHeader } from "./utils";
// import { DataTableColumnHeader } from "./DataTableColumnHeader";
// import { SmartCellRenderer } from "./SmartCellRenderer";
// import { useColumnManagerContext } from "@/lib/api/ColumnManagerApi";

// export interface ColumnGenerationConfig {
//   hiddenColumns?: string[];
// }
// export type CellType = 'default' | 'currency' | 'date' | 'status' | 'image' | 'badge';

// export interface ColumnSchemaConfig<TData> {
//   header?: string;          
//   cellType?: CellType;       
//   enableSorting?: boolean;
//   enableHiding?: boolean;
//   enableResizing?: boolean;
//   enableColumnFilter?: boolean;
//   enablePinning?: boolean;
//   size?: number;
//   minSize?: number;
//   maxSize?: number;
//   meta?: {
//     [key: string]: any;
//   };
// }

// export type TableSchema<TData> = {
//   [key in keyof TData]?: ColumnSchemaConfig<TData>;
// };

// export const generateDynamicColumns = <TData extends { id: any }>(
//   data: TData[],
//   schema: TableSchema<TData> = {},
//   config: ColumnGenerationConfig = {}
// ): ColumnDef<TData>[] => {
//   if (!data || data.length === 0) return [];
//   const { actions, states } = useColumnManagerContext();
//   const {called , data:AllColumns , error , loading , success , isStale , lastSuccessAt ,  message} = states.getColumns
//   const sample = data[0];
//   const keys = Object.keys(sample) as (keyof TData)[];
//   const defaultHidden = ['deleted_at'];
//   const finalHiddenColumns = [...defaultHidden, ...(config.hiddenColumns || [])];

//   const columns: ColumnDef<TData>[] = keys
//     .filter(key => !finalHiddenColumns.includes(String(key)))
//     .map((key) => {
//       const keyString = String(key);
//       const customConfig = schema[key] || {};
      
//       let smartCellType: CellType = 'default';
//       if (keyString.toLowerCase().includes('date') || keyString.toLowerCase().endsWith('_at')) smartCellType = 'date';
//       else if (keyString.toLowerCase().includes('price') || keyString.toLowerCase().includes('amount')) smartCellType = 'currency';
//       else if (keyString.toLowerCase().includes('status')) smartCellType = 'status';
//       else if (keyString.toLowerCase().includes('image') || keyString.toLowerCase().includes('avatar')) smartCellType = 'image';

//       const finalConfig: ColumnDef<TData> = {
//         id: keyString,
//         accessorKey: keyString,
//         header: ({ column }) => (
//           <DataTableColumnHeader
//             column={column}
//             title={(customConfig.header || formatHeader(keyString)).toUpperCase()}
//           />
//         ),
//         cell: SmartCellRenderer,
//         enableSorting: true,
//         enableHiding: true,
//         enableResizing: true,
//         enableColumnFilter: true,
//         enablePinning: true,
//         ...customConfig,
//         meta: {
//           cellType: customConfig.cellType || smartCellType,
//           ...customConfig.meta,
//         },
//       };
      
//       return finalConfig;
//     });

//   return columns;
// };





