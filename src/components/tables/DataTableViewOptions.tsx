import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  DragHandleDots2Icon,
  MixerHorizontalIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import { Table as TanstackTable } from "@tanstack/react-table";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import React from "react";
import { ColumnManagerController_addColumnRequest, useColumnManagerContext } from "@/lib/api/ColumnManagerApi";

interface DataTableViewOptionsProps<TData> {
  table: TanstackTable<TData>;
  density?: 'compact' | 'standard' | 'comfortable';
  setDensity?: (density: 'compact' | 'standard' | 'comfortable') => void;
}

const SortableColumnItem = ({ column }: { column: any }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column.id });
  console.log("column.SortableColumnItem" , column)
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center">
      <div {...attributes} {...listeners} className="cursor-grab p-2">
        <DragHandleDots2Icon className="h-4 w-4" />
      </div>
      <DropdownMenuCheckboxItem
        key={column.id}
        className="capitalize flex-grow"
        checked={column.getIsVisible()}
        onCheckedChange={(value) => column.toggleVisibility(!!value)}
      >
        {column.id}
      </DropdownMenuCheckboxItem>
    </div>
  );
};

export function DataTableViewOptions<TData>({
  table,
  density,
  setDensity,
}: DataTableViewOptionsProps<TData>) {
  const { columnOrder } = table.getState();
  const {actions , dehydrate , queries , states } = useColumnManagerContext()
  const {addColumn , clearColumnValues , deleteColumn , deleteRelation , getColumns , updateColumn } = actions
  const {addColumn:addColumnState , clearColumnValues:clearColumnValuesState , deleteColumn:deleteColumnState , deleteRelation:deleteRelationState , getColumns:getColumnsState , updateColumn:updateColumnState} = states
  const {called , data , error , loading , rawResponse , success , isStale , lastSuccessAt , links , message , meta ,  validationErrors} = addColumnState
  
  const addColumninit:ColumnManagerController_addColumnRequest = {
    columnName:"5",
    dataType:"text",
    labelAr:"",
    labelEn:"",
    isFilterable:true,
    isNullable:true,
    isSearchable:true,
    isSelectable:true,
    isSortable:true,
  }
  
  addColumn.execute(addColumninit)
  
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = columnOrder.indexOf(active.id as string);
      const newIndex = columnOrder.indexOf(over!.id as string);
      const newOrder = arrayMove(columnOrder, oldIndex, newIndex);
      table.setColumnOrder(newOrder);
    }
  };

  const hideableColumns = table.getAllLeafColumns().filter(
    (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto hidden h-10 lg:flex">
          <MixerHorizontalIcon className="mr-2 h-4 w-4" /> View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>View Options</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => {
            table.resetColumnVisibility();
            table.resetColumnOrder();
          }}>
          <ResetIcon className="mr-2 h-4 w-4" />
          Reset View
        </DropdownMenuItem>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>Table Density</DropdownMenuLabel>
        <div className="px-1 py-1">
            <ToggleGroup
              type="single"
              value={density}
              onValueChange={(value) => {
                  if (value) setDensity?.(value as any)
              }}
              className="w-full justify-between"
            >
              <ToggleGroupItem value="compact" aria-label="Compact">
                <ArrowDownIcon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="standard" aria-label="Standard">
                <CaretSortIcon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="comfortable" aria-label="Comfortable">
                <ArrowUpIcon className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuLabel>Toggle & Reorder Columns</DropdownMenuLabel>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={columnOrder} strategy={verticalListSortingStrategy}>
             {columnOrder.map((columnId) => {
              const column = hideableColumns.find(c => c.id === columnId);
              return column ? <SortableColumnItem key={columnId} column={column} /> : null;
            })}
          </SortableContext>
        </DndContext>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}