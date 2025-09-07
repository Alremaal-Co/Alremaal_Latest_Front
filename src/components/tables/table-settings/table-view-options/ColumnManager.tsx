"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { DndContext, DragEndEvent, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { PlusIcon, ResetIcon } from "@radix-ui/react-icons";
import { Table, Column } from "@tanstack/react-table";
import { useColumnManagerContext, ColumnManagerController_addColumnRequestValidated, ColumnManagerController_updateColumnRequestValidated } from "@/lib/api/ColumnManagerApi";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { AddColumnForm } from "./AddColumnForm";
import { SortableColumnItem } from "./SortableColumnItem";
import { useTranslations } from "next-intl";
import { isEqual } from "lodash";

interface ColumnManagerProps<TData> {
  table: Table<TData>;
  columnOrder: string[];
  hideableColumns: Column<TData, unknown>[];
  onDragEnd: (event: DragEndEvent) => void;
  onReset: () => void;
}

export const ColumnManager = <TData,>({
  table,
  columnOrder,
  hideableColumns,
  onDragEnd,
  onReset,
}: ColumnManagerProps<TData>) => {
  const t = useTranslations();
  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor));
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
  const { actions, states } = useColumnManagerContext();
  const { data: allColumns, success } = states.getColumns;

  const handleSuccess = (message: string) => {
    toast.success(message);
    setIsSheetOpen(false);
    setEditingColumnId(null);
    actions.getColumns.execute();
  };
  
  const handleError = (state: any, defaultMessage: string) => {
    toast.error(state.message || defaultMessage);
  };

  const handleFormSubmit = (data: ColumnManagerController_addColumnRequestValidated) => {
    if (editingColumnId) {
      const originalData = allColumns?.find(col => col.columnName === editingColumnId);
      if (isEqual(originalData, { ...originalData, ...data })) {
        toast.info("No changes detected.");
        return;
      }
      
      const payload: ColumnManagerController_updateColumnRequestValidated = { ...data };
      actions.updateColumn.execute(payload, {
        pathParams: { columnName: editingColumnId },
        onSuccess: () => {
          handleSuccess("Column updated successfully!")
          actions.getColumns.execute();
        },
        onError: () => handleError(states.updateColumn, "Failed to update column."),
      });
    } else {
      actions.addColumn.execute(data, {
        onSuccess: () => handleSuccess("Column added successfully!"),
        onError: () => handleError(states.addColumn, "Failed to add column."),
      });
    }
  };

  const handleEditClick = useCallback((columnId: string) => {
    setEditingColumnId(columnId);
    setIsSheetOpen(true);
  }, []);
  
  const handleAddNewClick = useCallback(() => {
    setEditingColumnId(null);
    setIsSheetOpen(true);
  }, []);

  const handleDelete = (columnId: string) => {
    actions.deleteColumn.execute(undefined, {
      pathParams: { columnName: columnId },
      onSuccess: () => {
        toast.success("Column deleted successfully!");
        actions.getColumns.execute();
      },
      onError: () => handleError(states.deleteColumn, "Failed to delete column."),
    });
  };
  
  const editingColumnData = useMemo(() => {
    if (!editingColumnId || !success || !allColumns) return null;
    return allColumns.find(col => col.columnName === editingColumnId);
  }, [editingColumnId, allColumns, success]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base font-semibold">{t('manageColumns')}</h3>
        <div className="flex items-center gap-1">
          <Sheet open={isSheetOpen} onOpenChange={(open) => { if (!open) setEditingColumnId(null); setIsSheetOpen(open); }}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-7 w-7" onClick={handleAddNewClick}>
                <PlusIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{editingColumnId ? 'Edit Column' : t('addColumnForm.title')}</SheetTitle>
                <SheetDescription>{editingColumnId ? `Editing the "${editingColumnId}" column.` : t('addColumnForm.description')}</SheetDescription>
              </SheetHeader>
              {isSheetOpen && (
                <AddColumnForm
                  key={editingColumnId || 'add-new'}
                  defaultValues={editingColumnData}
                  onSubmit={handleFormSubmit}
                  isLoading={states.addColumn.loading || states.updateColumn.loading}
                />
              )}
            </SheetContent>
          </Sheet>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-7 w-7" onClick={onReset}><ResetIcon className="h-4 w-4" /></Button></TooltipTrigger>
              <TooltipContent><p>{t('resetViewTooltip')}</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="border rounded-md p-2 h-96 overflow-y-auto">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={columnOrder} strategy={verticalListSortingStrategy}>
            {columnOrder.map((columnId) => {
              const column = hideableColumns.find((c) => c.id === columnId);
              return column ? (
                <SortableColumnItem key={columnId} column={column} onEdit={handleEditClick} onDelete={handleDelete} />
              ) : null;
            })}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};







