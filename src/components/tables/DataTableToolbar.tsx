"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { CalendarDatePicker } from "../calendar-date-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
import { DataTableActions } from "./table-settings/DataTableActions";
import { DataTableConfig } from "./types.utils.tables";
import { ViewOptionsDialog } from "./table-settings/table-view-options";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  config: DataTableConfig<TData>;
  density: 'compact' | 'standard' | 'comfortable';
  setDensity: (d: any) => void;
  isStriped: boolean;
  setIsStriped: (v: boolean) => void;
  hasBorders: boolean;
  setHasBorders: (v: boolean) => void;
  isStickyHeader: boolean;
  setIsStickyHeader: (v: boolean) => void;
  enableHover: boolean;
  setEnableHover: (v: boolean) => void;
  truncateText: boolean;
  setTruncateText: (v: boolean) => void;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  globalFilter: string;
  onGlobalFilterChange: (value: string) => void;
}

export function DataTableToolbar<TData>({ table, config, globalFilter, onGlobalFilterChange, ...viewOptions }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 py-2">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          placeholder="Search all columns..."
          value={globalFilter}
          onChange={(event) => onGlobalFilterChange(event.target.value)}
          className="h-10 w-[150px] lg:w-[250px]"
        />
        {config.facetedFilters?.map((filter) => {
          const column = table.getColumn(String(filter.columnId));
          return column ? <DataTableFacetedFilter key={String(filter.columnId)} column={column} title={filter.title} options={filter.options} /> : null;
        })}
        {config.dateFilterColumn && table.getColumn(String(config.dateFilterColumn)) && (
          <CalendarDatePicker onDateSelect={({ from, to }) => table.getColumn(String(config.dateFilterColumn))?.setFilterValue([from, to])} />
        )}
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">Reset<Cross2Icon className="ml-2 h-4 w-4" /></Button>
        )}
      </div>
      <div className="flex items-center gap-2">
        {config.enableSoftDeleteFilter && (
          <div className="flex items-center space-x-2"><Switch id="include-deleted" onCheckedChange={(checked) => {/* ... */}} checked={!table.getState().columnFilters.some(f => f.id === 'deleted_at' && f.value === null)} /><Label htmlFor="include-deleted" className="text-sm">Show Deleted</Label></div>
        )}
        <DataTableActions table={table} tableContainerRef={viewOptions.tableContainerRef}
        //  onAddNew={()=>{}}
        //  onAdvancedFilter={()=>{}}
         onDeleteSelected={()=>{}}
        //  onImport={()=>{}}
        //  onRefresh={()=>{}}
        />
        <ViewOptionsDialog<TData> table={table} {...viewOptions} />
      </div>
    </div> 
  );
}












// import { Cross2Icon } from "@radix-ui/react-icons";
// import { CalendarDatePicker } from "../calendar-date-picker";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { DataTableFacetedFilter } from "./DataTableFacetedFilter";
// import { DataTableConfig } from "./types.utils.tables";
// import { Table, Table as TanstackTable
// } from "@tanstack/react-table";
// import { Switch } from "../ui/switch";
// import { Label } from "../ui/label";
// import { DataTableActions } from "./table-settings/DataTableActions";
// import { ColumnManagerDialog } from "./table-settings/ColumnManagerDialog";
// import { ViewOptionsDialog } from "./table-settings/ViewOptionsDialog";

// interface DataTableToolbarProps<TData> {
//   table: Table<TData>;
//   config: DataTableConfig<TData>;
//   density: 'compact' | 'standard' | 'comfortable';
//   setDensity: (d: any) => void;
//   isStriped: boolean;
//   setIsStriped: (v: boolean) => void;
//   hasBorders: boolean;
//   setHasBorders: (v: boolean) => void;
//   tableContainerRef: React.RefObject<HTMLDivElement | null>
// }


// export function DataTableToolbar<TData>({ table, config , density , setDensity , hasBorders , isStriped , setHasBorders , setIsStriped , tableContainerRef }: DataTableToolbarProps<TData>) {
//   const isFiltered = table.getState().columnFilters.length > 0;
//   const searchColumnId = config.searchColumn ? String(config.searchColumn) : '';
  
//   return (
//     <div className="flex flex-wrap items-center justify-between gap-2 py-2">
//       <div className="flex flex-1 flex-wrap items-center gap-2">
//         {config.searchColumn && (
//           <Input
//             placeholder={config.searchPlaceholder || `Filter by ${searchColumnId}...`}
//             value={(table.getColumn(searchColumnId)?.getFilterValue() as string) ?? ""}
//             onChange={(event) => table.getColumn(searchColumnId)?.setFilterValue(event.target.value)}
//             className="h-10 w-[150px] lg:w-[250px]"
//           />
//         )}
//         {config.facetedFilters?.map((filter) => {
//           const column = table.getColumn(String(filter.columnId));
//           return column ? <DataTableFacetedFilter key={String(filter.columnId)} column={column} title={filter.title} options={filter.options} /> : null;
//         })}
//         {config.dateFilterColumn && table.getColumn(String(config.dateFilterColumn)) && (
//           <CalendarDatePicker
//             onDateSelect={({ from, to }) => table.getColumn(String(config.dateFilterColumn))?.setFilterValue([from, to])}
//           />
//         )}
//         {isFiltered && (
//           <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
//             Reset
//             <Cross2Icon className="ml-2 h-4 w-4" />
//           </Button>
//         )}
//       </div>
//       <div className="flex items-center gap-2">
//         {config.enableSoftDeleteFilter && (
//             <div className="flex items-center space-x-2">
//                 <Switch
//                     id="include-deleted"
//                     onCheckedChange={(checked) => {
//                         const filter = table.getState().columnFilters.find(f => f.id === 'deleted_at');
//                         table.setColumnFilters(
//                             checked
//                                 ? [...table.getState().columnFilters.filter(f => f.id !== 'deleted_at')]
//                                 : [...table.getState().columnFilters, { id: 'deleted_at', value: null }]
//                         );
//                     }}
//                     checked={!table.getState().columnFilters.some(f => f.id === 'deleted_at' && f.value === null)}
//                 />
//                 <Label htmlFor="include-deleted" className="text-sm">Show Deleted</Label>
//             </div>
//         )}

//      <div className="flex items-center space-x-2">
//         <DataTableActions table={table} tableContainerRef={tableContainerRef} />
//         <ColumnManagerDialog />
//         <ViewOptionsDialog
//           table={table}
//           density={density}
//           setDensity={setDensity}
//           isStriped={isStriped}
//           setIsStriped={setIsStriped}
//           hasBorders={hasBorders}
//           setHasBorders={setHasBorders}
//         />
//       </div>
//       </div>
//     </div>
//   );
// }