"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragHandleDots2Icon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Column } from "@tanstack/react-table";
import { t } from "@/i18n/trans";
import { Languages } from "@/core/enum/general";

export const SortableColumnItem = ({ column, onEdit, onDelete }: { column: Column<any, any>; onEdit: (col: any) => void; onDelete: (colId: string) => void; }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const labelEn = column?.columnDef?.meta?.labelEn || column.id;
  const labelAr = column?.columnDef?.meta?.labelAr || column.id;

  // اختيار التسمية بناءً على اللغة
  const displayLabel = t(Languages.LANGUAGE) === Languages.ARABIC ? labelAr : labelEn;
  return (
    <div ref={setNodeRef} style={style} className="group flex items-center space-x-3 rounded-md hover:bg-muted/50 w-full p-2">
      <div {...attributes} {...listeners} className="cursor-grab text-muted-foreground"><DragHandleDots2Icon /></div>
      <Checkbox id={column.id} checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)} />
      <Label htmlFor={column.id} className="capitalize flex-grow cursor-pointer text-sm">{displayLabel}- <span className="text-[10px]">({column.id})</span></Label>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => onEdit(column.id)}><Pencil2Icon className="h-3 w-3" /></Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6 text-destructive hover:text-destructive"><TrashIcon className="h-3 w-3" /></Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This action will permanently delete the column.</AlertDialogDescription></AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => onDelete(column.id)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};