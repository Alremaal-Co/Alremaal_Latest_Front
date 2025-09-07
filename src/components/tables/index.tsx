"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnSizingState,
  ColumnPinningState,
} from "@tanstack/react-table";
import { useSearchParams } from 'next/navigation';
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";
import { SmartDataTableProps } from "./types.utils.tables";
import { generateDynamicColumns } from "./generateDynamicColumns";
import { DataTableSkeleton } from "./DataTableSkeleton";
import { DataTableToolbar } from "./DataTableToolbar";
import { DataTablePagination } from "./DataTablePagination";
import { useDynamicDataOperationsContext } from "@/lib/api/DynamicDataOperationsApi";
import TableHeaderHandeler from "./TableHeader";
import { DataTableRowActions } from "./DataTableRowActions";
import { Checkbox } from "../ui/checkbox";
import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
import { usePersistentState } from "./hooks.tables/use-persistent-state.ts";
import { useColumnManagerContext } from "@/lib/api/ColumnManagerApi";

export function SmartDataTable<TData extends { id: any; deleted_at?: string | null }>({ endpointName, config, defaultViewOptions = {} }: SmartDataTableProps<TData>) {
  const { states: dynamicDataStates, queries , actions } = useDynamicDataOperationsContext();
  const { states: columnManagerStates } = useColumnManagerContext();

  const { data, loading, error, message, meta } = dynamicDataStates.findAll;
  const searchParams = useSearchParams();
  const storageKeyPrefix = `table-settings:${endpointName}`;
  const { settings } = useThemeCustomizer();
  const { direction } = settings;

  useEffect(() => {
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10;
    const with_trashed = searchParams.get('with_trashed') === 'true';
    if (queries.findAll.options.page !== page || queries.findAll.options.limit !== limit || queries.findAll.options.with_trashed !== with_trashed) {
      queries.findAll.setOptions({ page, limit, with_trashed });
    }
  }, [searchParams, queries.findAll]);

  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  
  const [sorting, setSorting] = usePersistentState<SortingState>(`${storageKeyPrefix}:sorting`, []);
  const [columnVisibility, setColumnVisibility] = usePersistentState<VisibilityState>(`${storageKeyPrefix}:visibility`, {});
  const [columnOrder, setColumnOrder] = usePersistentState<string[]>(`${storageKeyPrefix}:columnOrder`, []);
  const [columnSizing, setColumnSizing] = usePersistentState<ColumnSizingState>(`${storageKeyPrefix}:sizing`, {});
  
  const [density, setDensity] = usePersistentState<'compact' | 'standard' | 'comfortable'>(`${storageKeyPrefix}:density`, defaultViewOptions.density ?? 'standard');
  const [isStriped, setIsStriped] = usePersistentState<boolean>(`${storageKeyPrefix}:isStriped`, defaultViewOptions.isStriped ?? true);
  const [hasBorders, setHasBorders] = usePersistentState<boolean>(`${storageKeyPrefix}:hasBorders`, defaultViewOptions.hasBorders ?? true);
  const [isStickyHeader, setIsStickyHeader] = usePersistentState<boolean>(`${storageKeyPrefix}:isStickyHeader`, defaultViewOptions.isStickyHeader ?? true);
  const [enableHover, setEnableHover] = usePersistentState<boolean>(`${storageKeyPrefix}:enableHover`, defaultViewOptions.enableHover ?? true);
  const [truncateText, setTruncateText] = usePersistentState<boolean>(`${storageKeyPrefix}:truncateText`, defaultViewOptions.truncateText ?? false);
  
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
    left: ['select'],
    right: ['actions'],
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const dynamicToolbarConfig = useMemo(() => {
    const dataSample = data?.[0];
    if (!dataSample) return { searchColumn: '' as keyof TData };
    const commonNames = ['name', 'title', 'label'];
    const commonSearchColumn = Object.keys(dataSample).find(key => commonNames.includes(key)) as keyof TData;
    const potentialSearchColumn = Object.keys(dataSample).find(key => typeof (dataSample as any)[key] === 'string' && key !== 'id') as keyof TData;
    const potentialDateColumn = Object.keys(dataSample).find(key => String(key).includes('date') || String(key).includes('_at')) as keyof TData;
    return {
        searchColumn: config?.searchColumn || commonSearchColumn || potentialSearchColumn || 'id',
        searchPlaceholder: config?.searchPlaceholder,
        facetedFilters: config?.facetedFilters,
        dateFilterColumn: config?.dateFilterColumn || potentialDateColumn,
        enableSoftDeleteFilter: config?.enableSoftDeleteFilter ?? (dataSample && 'deleted_at' in dataSample),
    };
  }, [data, config]);
  
  const columns = useMemo(() => {
    const generated = generateDynamicColumns(
      data || [],
      {},
      columnManagerStates.getColumns,
      { lang: direction === 'rtl' ? 'ar' : 'en' }
    );

    return [
      { id: "select", header: ({ table }) => (<Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />), cell: ({ row }) => (<Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />), enableSorting: false, enableHiding: false, size: 60, enableResizing: false, enablePinning: true },
      ...generated,
      { id: "actions", cell: ({ row }) => <DataTableRowActions row={row} />, enableSorting: false, enableHiding: false, size: 80, enableResizing: false, enablePinning: true },
    ];
  }, [data, columnManagerStates.getColumns, direction]);
  
  useEffect(() => {
    if (columns.length > 2 && columnOrder.length === 0) {
      const initialOrder = columns.map(c => c.id!);
      setColumnOrder(initialOrder);
    }
  }, [columns, columnOrder.length, setColumnOrder]);

  const table = useReactTable({
    data: data || [],
    columns,
    state: { sorting, columnVisibility, rowSelection, columnFilters, columnOrder, columnSizing, columnPinning },
    pageCount: meta?.last_page ?? -1,
    manualPagination: true,
    manualFiltering: true,
    enableRowSelection: true,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnSizingChange: setColumnSizing,
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  
  if (loading && (!data || data.length === 0)) return <DataTableSkeleton />;
  if (error) return <div className="p-8"><Alert variant="destructive"><Terminal className="h-4 w-4" /><AlertTitle>An Error Occurred</AlertTitle><AlertDescription>{message || "Failed to load data."}</AlertDescription></Alert></div>;

  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
      <div className="space-y-4" ref={tableContainerRef}>  
        <DataTableToolbar table={table} config={dynamicToolbarConfig} density={density} setDensity={setDensity} isStriped={isStriped} setIsStriped={setIsStriped} hasBorders={hasBorders} setHasBorders={setHasBorders} isStickyHeader={isStickyHeader} setIsStickyHeader={setIsStickyHeader} enableHover={enableHover} setEnableHover={setEnableHover} truncateText={truncateText} setTruncateText={setTruncateText} tableContainerRef={tableContainerRef} />
        <div className="rounded-md border bg-card relative max-h-[70vh] overflow-auto">
          <Table>
            <TableHeaderHandeler table={table} className={cn(isStickyHeader && "sticky top-0 z-10")} />
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <TableRow key={(row.original as any).id || row.id} data-state={row.getIsSelected() && "selected"} className={cn("transition-colors", row.original.deleted_at && "opacity-50 bg-destructive/10", isStriped && index % 2 === 1 && !row.getIsSelected() && "bg-muted/25", !hasBorders && "border-none", enableHover && "hover:bg-muted/50")}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={{ width: cell.column.getSize() }}
                        className={cn(
                          "p-4",
                          !hasBorders && "border-none",
                          truncateText && "whitespace-nowrap overflow-hidden text-ellipsis",
                          cell.column.getIsPinned() === 'left' && 'sticky start-0 bg-background',
                          cell.column.getIsPinned() === 'right' && 'sticky end-0 bg-background',
                          cell.column.getIsLastColumn('left') && 'border-e',
                          cell.column.getIsFirstColumn('right') && 'border-s',
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow><TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} meta={meta} />
      </div>
    </div>
  );
}





























// "use client";

// import React, { useMemo, useState, useEffect, useRef } from "react";
// import {
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFacetedRowModel,
//   getFacetedUniqueValues,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
//   ColumnSizingState,
//   ColumnPinningState,
//   Cell,
// } from "@tanstack/react-table";
// import { useSearchParams } from 'next/navigation';
// import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { cn } from "@/lib/utils";
// import { Terminal } from "lucide-react";
// import { SmartDataTableProps } from "./types.utils.tables";
// import { generateDynamicColumns } from "./generateDynamicColumns";
// import { DataTableSkeleton } from "./DataTableSkeleton";
// import { DataTableToolbar } from "./DataTableToolbar";
// import { DataTablePagination } from "./DataTablePagination";
// import { useDynamicDataOperationsContext } from "@/lib/api/DynamicDataOperationsApi";
// import TableHeaderHandeler from "./TableHeader";
// import { DataTableRowActions } from "./DataTableRowActions";
// import { Checkbox } from "../ui/checkbox";
// import { useThemeCustomizer } from "@/context/ThemeCustomizerContext";
// import { usePersistentState } from "./hooks.tables/use-persistent-state.ts";
// import { useColumnManagerContext } from "@/lib/api/ColumnManagerApi";

// export function SmartDataTable<TData extends { id: any; deleted_at?: string | null }>({ endpointName, config, defaultViewOptions = {} }: SmartDataTableProps<TData>) {
//   const { states, queries } = useDynamicDataOperationsContext();

//   const { data, loading, error, message, meta } = states.findAll;
//   const searchParams = useSearchParams();
//   const storageKeyPrefix = `table-settings:${endpointName}`;
//   const { settings } = useThemeCustomizer();
//   const { direction } = settings;

//   useEffect(() => {
//     const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
//     const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 10;
//     const with_trashed = searchParams.get('with_trashed') === 'true';
//     if (queries.findAll.options.page !== page || queries.findAll.options.limit !== limit || queries.findAll.options.with_trashed !== with_trashed) {
//       queries.findAll.setOptions({ page, limit, with_trashed });
//     }
//   }, [searchParams, queries.findAll]);

//   const [rowSelection, setRowSelection] = useState({});
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  
//   const [sorting, setSorting] = usePersistentState<SortingState>(`${storageKeyPrefix}:sorting`, []);
//   const [columnVisibility, setColumnVisibility] = usePersistentState<VisibilityState>(`${storageKeyPrefix}:visibility`, {});
//   const [columnOrder, setColumnOrder] = usePersistentState<string[]>(`${storageKeyPrefix}:columnOrder`, []);
//   const [columnSizing, setColumnSizing] = usePersistentState<ColumnSizingState>(`${storageKeyPrefix}:sizing`, {});
  
//   const [density, setDensity] = usePersistentState<'compact' | 'standard' | 'comfortable'>(`${storageKeyPrefix}:density`, defaultViewOptions.density ?? 'standard');
//   const [isStriped, setIsStriped] = usePersistentState<boolean>(`${storageKeyPrefix}:isStriped`, defaultViewOptions.isStriped ?? true);
//   const [hasBorders, setHasBorders] = usePersistentState<boolean>(`${storageKeyPrefix}:hasBorders`, defaultViewOptions.hasBorders ?? true);
//   const [isStickyHeader, setIsStickyHeader] = usePersistentState<boolean>(`${storageKeyPrefix}:isStickyHeader`, defaultViewOptions.isStickyHeader ?? true);
//   const [enableHover, setEnableHover] = usePersistentState<boolean>(`${storageKeyPrefix}:enableHover`, defaultViewOptions.enableHover ?? true);
//   const [truncateText, setTruncateText] = usePersistentState<boolean>(`${storageKeyPrefix}:truncateText`, defaultViewOptions.truncateText ?? false);
  
//   const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({
//     left: ['select'],
//     right: ['actions'],
//   });

//   const tableContainerRef = useRef<HTMLDivElement>(null);

//   const dynamicToolbarConfig = useMemo(() => {
//     const dataSample = data?.[0];
//     if (!dataSample) return { searchColumn: '' as keyof TData };
//     const commonNames = ['name', 'title', 'label'];
//     const commonSearchColumn = Object.keys(dataSample).find(key => commonNames.includes(key)) as keyof TData;
//     const potentialSearchColumn = Object.keys(dataSample).find(key => typeof (dataSample as any)[key] === 'string' && key !== 'id') as keyof TData;
//     const potentialDateColumn = Object.keys(dataSample).find(key => String(key).includes('date') || String(key).includes('_at')) as keyof TData;
//     return {
//         searchColumn: config?.searchColumn || commonSearchColumn || potentialSearchColumn || 'id',
//         searchPlaceholder: config?.searchPlaceholder,
//         facetedFilters: config?.facetedFilters,
//         dateFilterColumn: config?.dateFilterColumn || potentialDateColumn,
//         enableSoftDeleteFilter: config?.enableSoftDeleteFilter ?? (dataSample && 'deleted_at' in dataSample),
//     };
//   }, [data, config]);
  
//   const columns = useMemo(() => {
//     const hiddenColumns = ['id'].includes(String(dynamicToolbarConfig.searchColumn)) ? [] : ['id'];
//     const generated = generateDynamicColumns(data || [], []);
//     return [
//       { id: "select", header: ({ table }) => (<Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label="Select all" />), cell: ({ row }) => (<Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />), enableSorting: false, enableHiding: false, size: 60, enableResizing: false, enablePinning: true },
//       ...generated,
//       { id: "actions", cell: ({ row }) => <DataTableRowActions row={row} />, enableSorting: false, enableHiding: false, size: 80, enableResizing: false, enablePinning: true },
//     ];
//   }, [data, dynamicToolbarConfig.searchColumn]);
  
//   useEffect(() => {
//     if (columns.length > 0 && columnOrder.length === 0) {
//       const initialOrder = columns.map(c => c.id!);
//       setColumnOrder(initialOrder);
//     }
//   }, [columns, columnOrder.length, setColumnOrder]);

//   const table = useReactTable({
//     data: data || [],
//     columns,
//     state: { sorting, columnVisibility, rowSelection, columnFilters, columnOrder, columnSizing, columnPinning },
//     pageCount: meta?.last_page ?? -1,
//     manualPagination: true,
//     manualFiltering: true,
//     enableRowSelection: true,
//     enableColumnResizing: true,
//     columnResizeMode: 'onChange',
//     onRowSelectionChange: setRowSelection,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     onColumnVisibilityChange: setColumnVisibility,
//     onColumnOrderChange: setColumnOrder,
//     onColumnSizingChange: setColumnSizing,
//     onColumnPinningChange: setColumnPinning,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFacetedRowModel: getFacetedRowModel(),
//     getFacetedUniqueValues: getFacetedUniqueValues(),
//   });
  
//   if (loading && (!data || data.length === 0)) return <DataTableSkeleton />;
//   if (error) return <div className="p-8"><Alert variant="destructive"><Terminal className="h-4 w-4" /><AlertTitle>An Error Occurred</AlertTitle><AlertDescription>{message || "Failed to load data."}</AlertDescription></Alert></div>;

//   return (
//     <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
//       <div className="space-y-4" ref={tableContainerRef}>  
//         <DataTableToolbar table={table} config={dynamicToolbarConfig} density={density} setDensity={setDensity} isStriped={isStriped} setIsStriped={setIsStriped} hasBorders={hasBorders} setHasBorders={setHasBorders} isStickyHeader={isStickyHeader} setIsStickyHeader={setIsStickyHeader} enableHover={enableHover} setEnableHover={setEnableHover} truncateText={truncateText} setTruncateText={setTruncateText} tableContainerRef={tableContainerRef} />
//         <div className="rounded-md border bg-card relative max-h-[70vh] overflow-auto">
//           <Table>
//             <TableHeaderHandeler table={table} className={cn(isStickyHeader && "sticky top-0 z-10")} />
//             <TableBody>
//               {table.getRowModel().rows?.length ? (
//                 table.getRowModel().rows.map((row, index) => (
//                   <TableRow key={(row.original as any).id || row.id} data-state={row.getIsSelected() && "selected"} className={cn("transition-colors", row.original.deleted_at && "opacity-50 bg-destructive/10", isStriped && index % 2 === 1 && !row.getIsSelected() && "bg-muted/25", !hasBorders && "border-none", enableHover && "hover:bg-muted/50")}>
//                     {row.getVisibleCells().map((cell) => (
//                       <TableCell
//                         key={cell.id}
//                         style={{ width: cell.column.getSize() }}
//                         className={cn(
//                           "p-4",
//                           !hasBorders && "border-none",
//                           truncateText && "whitespace-nowrap overflow-hidden text-ellipsis",
//                           cell.column.getIsPinned() === 'left' && 'sticky start-0 bg-background',
//                           cell.column.getIsPinned() === 'right' && 'sticky end-0 bg-background',
//                           cell.column.getIsLastColumn('left') && 'border-e',
//                           cell.column.getIsFirstColumn('right') && 'border-s',
//                         )}
//                       >
//                         {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                       </TableCell>
//                     ))}
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow><TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell></TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//         <DataTablePagination table={table} meta={meta} />
//       </div>
//     </div>
//   );
// }




