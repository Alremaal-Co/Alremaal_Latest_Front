"use client";

import React from 'react';
import { TableHead, TableHeader, TableRow } from '../ui/table';
import { flexRender, Table, Header } from '@tanstack/react-table';
import { cn } from '@/lib/utils';

interface TableHeaderHandlerProps<TData> {
  table: Table<TData>;
  className?: string;
}

export default function TableHeaderHandeler<TData>({ table, className }: TableHeaderHandlerProps<TData>) {
  return (
    <TableHeader className={cn("bg-background", className)}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="border-b hover:bg-muted/50">
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              colSpan={header.colSpan}
              style={{ width: header.getSize() }}
              className={cn(
                "group whitespace-nowrap p-4 relative ",
                header.column.getIsPinned() === 'left' && 'sticky start-0 bg-background',
                header.column.getIsPinned() === 'right' && 'sticky end-0 bg-background',
                header.column.getIsLastColumn('left') && 'border-e',
                header.column.getIsFirstColumn('right') && 'border-s',
              )}
            >
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
              
              {header.column.getCanResize() && (
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={cn(
                    "absolute top-0 h-full w-1.5 cursor-col-resize select-none touch-none bg-border opacity-0 group-hover:opacity-100 transition-opacity",
                    "end-0",
                    header.column.getIsResizing() && "bg-primary opacity-100"
                  )}
                />
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}