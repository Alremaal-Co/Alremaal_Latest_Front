"use client";

import React from "react";
import { Table as TanstackTable } from "@tanstack/react-table";
import { 
  DownloadIcon, 
  ExitFullScreenIcon, 
  EnterFullScreenIcon,
  PlusIcon,
  UploadIcon,
  TrashIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTableExport } from "../hooks.tables/useTableExport";
import { useTableFullscreen } from "../hooks.tables/useTableFullscreen";
import { FilterIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDynamicDataOperationsContext } from "@/lib/api/DynamicDataOperationsApi";

interface DataTableActionsProps<TData> {
  table: TanstackTable<TData>;
  tableContainerRef: React.RefObject<HTMLDivElement | null>;
  onAddNew?: () => void;
  onImport?: () => void;
  onAdvancedFilter?: () => void;
  onDeleteSelected?: (selectedRows: TData[]) => void;
  onRefresh?: () => void;
}

export function DataTableActions<TData>({ 
  table, 
  tableContainerRef,
  onAddNew,
  onImport,
  onAdvancedFilter,
  onDeleteSelected,
  onRefresh,
}: DataTableActionsProps<TData>) {
  const t = useTranslations();
  const { handleExport } = useTableExport(table);
  const { isFullscreen, toggleFullscreen } = useTableFullscreen(tableContainerRef);
  const selectedRowCount = table.getFilteredSelectedRowModel().rows.length;
  const { states: dynamicDataStates, queries , actions } = useDynamicDataOperationsContext();

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        {onAddNew && (
          <Button size="sm" className="h-10" onClick={onAddNew}>
            <PlusIcon className="mr-2 h-4 w-4" /> {t('addNew')}
          </Button>
        )}
        {onImport && (
          <Button variant="outline" size="sm" className="h-10" onClick={onImport}>
            <UploadIcon className="mr-2 h-4 w-4" /> {t('import')}
          </Button>
        )}
        {onAdvancedFilter && (
           <Button variant="outline" size="sm" className="h-10" onClick={onAdvancedFilter}>
            <FilterIcon className="mr-2 h-4 w-4" /> {t('filter')}
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        {onDeleteSelected && selectedRowCount > 0 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="destructive" size="sm" className="h-10" onClick={() => {
                  console.log("table.getFilteredSelectedRowModel().rows.map(r => r.original)",table.getFilteredSelectedRowModel().rows.map(r => r.original).map((item)=> item.id))
                  onDeleteSelected(table.getFilteredSelectedRowModel().rows.map(r => r.original))
                  actions.bulkRemove.execute({ids:table.getFilteredSelectedRowModel().rows.map(r => r.original).map((item)=> item?.id)},{
                    onError(error, context) {
                      
                    },
                    onSuccess(data, context) {
                      
                    },
                  })
                  }}>
                  <TrashIcon className="mr-2 h-4 w-4" /> 
                  {t('deleteSelected', { count: selectedRowCount })}
                </Button>
              </TooltipTrigger>
              <TooltipContent><p>{t('deleteSelectedTooltip', { count: selectedRowCount })}</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        
        {onRefresh && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10" onClick={onRefresh}><UpdateIcon className="h-4 w-4" /></Button>
              </TooltipTrigger>
              <TooltipContent><p>{t('refreshData')}</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button variant="outline" size="icon" className="h-10 w-10" onClick={() => handleExport()}><DownloadIcon className="h-4 w-4" /></Button></TooltipTrigger>
            <TooltipContent><p>{t('exportToCsv')}</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button variant="outline" size="icon" className="h-10 w-10" onClick={toggleFullscreen}>{isFullscreen ? <ExitFullScreenIcon className="h-4 w-4" /> : <EnterFullScreenIcon className="h-4 w-4" />}</Button></TooltipTrigger>
            <TooltipContent><p>{isFullscreen ? t('exitFullscreen') : t('enterFullscreen')}</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}














// import React, { useState, useEffect } from "react";
// import { Table as TanstackTable } from "@tanstack/react-table";
// import { DownloadIcon, ExitFullScreenIcon, EnterFullScreenIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// interface DataTableActionsProps<TData> {
//   table: TanstackTable<TData>;
//   tableContainerRef: React.RefObject<HTMLDivElement | null>;
// }

// export function DataTableActions<TData>({ table, tableContainerRef }: DataTableActionsProps<TData>) {
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const handleExport = () => {
//     const headers = table.getVisibleLeafColumns().map(col => col.id).join(',');
//     const rows = table.getRowModel().rows.map(row => 
//       row.getVisibleCells().map(cell => {
//         const value = cell.getValue();
//         if (typeof value === 'string') return `"${value.replace(/"/g, '""')}"`;
//         return value;
//       }).join(',')
//     ).join('\n');
    
//     const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "table_data.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const toggleFullscreen = () => {
//     const elem = tableContainerRef.current;
//     if (!elem) return;
//     if (!document.fullscreenElement) {
//       elem.requestFullscreen().catch(err => alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`));
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   useEffect(() => {
//     const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
//     document.addEventListener('fullscreenchange', onFullscreenChange);
//     return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
//   }, []);

//   return (
//     <TooltipProvider>
//       <div className="flex items-center space-x-2">
//         <Tooltip>
//           <TooltipTrigger asChild><Button variant="outline" size="sm" className="h-10" onClick={handleExport}><DownloadIcon className="h-4 w-4" /></Button></TooltipTrigger>
//           <TooltipContent><p>Export to CSV</p></TooltipContent>
//         </Tooltip>
//         <Tooltip>
//           <TooltipTrigger asChild><Button variant="outline" size="sm" className="h-10" onClick={toggleFullscreen}>{isFullscreen ? <ExitFullScreenIcon className="h-4 w-4" /> : <EnterFullScreenIcon className="h-4 w-4" />}</Button></TooltipTrigger>
//           <TooltipContent><p>{isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}</p></TooltipContent>
//         </Tooltip>
//       </div>
//     </TooltipProvider>
//   );
// }