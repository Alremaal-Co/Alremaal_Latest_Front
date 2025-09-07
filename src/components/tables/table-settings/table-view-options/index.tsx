"use client";

import React, { useState } from "react";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Table } from "@tanstack/react-table";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogContent } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { t } from "@/i18n/trans";
import { AppearanceOptions } from "./AppearanceOptions";
import { DensityToggle } from "./DensityToggle";
import { ColumnManager } from "./ColumnManager";

interface ViewOptionsDialogProps<TData> {
  table: Table<TData>;
  density: "compact" | "standard" | "comfortable";
  setDensity: (density: "compact" | "standard" | "comfortable") => void;
  isStriped: boolean;
  setIsStriped: (isStriped: boolean) => void;
  hasBorders: boolean;
  setHasBorders: (hasBorders: boolean) => void;
  isStickyHeader: boolean;
  setIsStickyHeader: (value: boolean) => void;
  enableHover: boolean;
  setEnableHover: (value: boolean) => void;
  truncateText: boolean;
  setTruncateText: (value: boolean) => void;
}

export function ViewOptionsDialog<TData>({
  table,
  density, setDensity,
  isStriped, setIsStriped,
  hasBorders, setHasBorders,
  isStickyHeader, setIsStickyHeader,
  enableHover, setEnableHover,
  truncateText, setTruncateText,
}: ViewOptionsDialogProps<TData>) {
  const { columnOrder } = table.getState();
  const [isOpen, setIsOpen] = useState(false);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id && over) {
      const oldIndex = columnOrder.indexOf(active.id as string);
      const newIndex = columnOrder.indexOf(over.id as string);
      table.setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex));
    }
  };

  const handleReset = () => {
    table.resetColumnVisibility();
    const defaultOrder = table.getAllColumns().map((c) => c.id);
    table.setColumnOrder(defaultOrder);
  };

  const hideableColumns = table.getAllLeafColumns().filter((c) => typeof c.accessorFn !== "undefined" && c.getCanHide());

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto hidden h-10 lg:flex"><MixerHorizontalIcon className="mr-2 h-4 w-4" /> {t('view')}</Button>
              </DialogTrigger>
            </TooltipTrigger>
            <TooltipContent><p>{t('customizeView')}</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <DialogContent className="sm:max-w-4xl p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader className="p-6 pb-4 cursor-move border-b px-4">
            <DialogTitle className="text-start">{t('viewOptionsTitle')}</DialogTitle>
            <DialogDescription className="text-start">{t('viewOptionsDescription')}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="space-y-6">
              <AppearanceOptions
                isStriped={isStriped}
                setIsStriped={setIsStriped}
                hasBorders={hasBorders}
                setHasBorders={setHasBorders}
                isStickyHeader={isStickyHeader}
                setIsStickyHeader={setIsStickyHeader}
                enableHover={enableHover}
                setEnableHover={setEnableHover}
                truncateText={truncateText}
                setTruncateText={setTruncateText}
              />
              <Separator />
              <DensityToggle density={density} setDensity={setDensity} />
            </div>
            <div>
              <ColumnManager
                table={table}
                columnOrder={columnOrder}
                hideableColumns={hideableColumns}
                onDragEnd={handleDragEnd}
                onReset={handleReset}
              />
            </div>
          </div>
        </DialogContent>

      </Dialog>
    </>
  );
}