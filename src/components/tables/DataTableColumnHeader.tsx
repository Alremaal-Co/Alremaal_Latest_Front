



"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  EyeNoneIcon,
  MixerHorizontalIcon,
  PinLeftIcon,
  PinRightIcon,
  ResetIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useDynamicDataOperationsContext } from "@/lib/api/DynamicDataOperationsApi";

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({ column, title }: DataTableColumnHeaderProps<TData, TValue>) {
  const { states, queries } = useDynamicDataOperationsContext();
  const setOptionsQ  = queries.findAll.setOptions
  const  AllOptions = queries.findAll.options

  return (
    <div className="flex items-center gap-1">
      <span className="flex-grow">{title}</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-7 w-7 opacity-50 hover:opacity-100">
            <MixerHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {column.getCanSort() && (
            <>
              <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                <ArrowUpIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Asc
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                <ArrowDownIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Desc
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          {column.getCanFilter() && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <MixerHorizontalIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Filter
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <div className="p-2">
                  <Input
                    placeholder={`Filter ${column.id}...`}
                    value={(column.getFilterValue() as string) ?? ""}
                    onChange={(e) => column.setFilterValue(e.target.value)}
                    className="w-full"
                  />
                </div>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          {column.getCanHide() && (
            <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
              <EyeNoneIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Hide
            </DropdownMenuItem>
          )}
          {column.getCanPin() && (
            <>
              <DropdownMenuSeparator />
              {column.getIsPinned() ? (
                <DropdownMenuItem onClick={() => column.pin(false)}>
                  <TrashIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Unpin
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => column.pin('left')}>
                    <PinLeftIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Pin Left
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => column.pin('right')}>
                    <PinRightIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Pin Right
                  </DropdownMenuItem>
                </>
              )}
            </>
          )}
          {column.getCanResize() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => column.resetSize()}>
                <ResetIcon className="me-2 h-3.5 w-3.5 text-muted-foreground/70" /> Reset Size
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
