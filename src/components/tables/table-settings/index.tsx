// import { Table as TanstackTable } from "@tanstack/react-table";
// import { ViewOptionsDialog } from "./ViewOptionsDialog";
// import { ColumnManagerDialog } from "./ColumnManagerDialog";
// import { DataTableActions } from "./DataTableActions";

// interface DataTableSettingsProps<TData> {
//   table: TanstackTable<TData>;
//   density: 'compact' | 'standard' | 'comfortable';
//   setDensity: (density: 'compact' | 'standard' | 'comfortable') => void;
//   tableContainerRef
// }

// export function DataTableSettings<TData>({ table, density, setDensity , tableContainerRef }: DataTableSettingsProps<TData>) {
//   return (
//  <div className="flex items-center space-x-2">
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
//   );
// }