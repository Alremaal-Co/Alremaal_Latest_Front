import { usePathname } from "@/i18n/routing";
import {
  Column,
  ColumnDef,
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
  Table as TanstackTable
} from "@tanstack/react-table";
import { useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export function DataTablePagination<TData>({ table, meta }: { table: TanstackTable<TData>, meta: any }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number | string, pageSize: number | string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('page', String(pageNumber));
      params.set('limit', String(pageSize));
      return `${pathname}?${params.toString()}`;
    };

    const currentPage = meta?.current_page || 1;
    const lastPage = meta?.last_page || 1;
    const pageSize = meta?.per_page || 10;
    
    return (
      <div className="flex items-center justify-between px-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {meta?.total || 0} row(s) selected.
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8" >
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Rows per page</p>
            <Select
              value={`${pageSize}`}
              onValueChange={(value) => router.push(createPageURL(1, value))}
            >
              <SelectTrigger className="h-8 w-[70px]"><SelectValue placeholder={pageSize} /></SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50].map((size) => <SelectItem key={size} value={`${size}`}>{size}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">Page {currentPage} of {lastPage}</div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => router.push(createPageURL(1, pageSize))} disabled={currentPage <= 1}><span className="sr-only">Go to first page</span><DoubleArrowLeftIcon className="h-4 w-4" /></Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={() => router.push(createPageURL(currentPage - 1, pageSize))} disabled={currentPage <= 1}><span className="sr-only">Go to previous page</span><ChevronLeftIcon className="h-4 w-4" /></Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={() => router.push(createPageURL(currentPage + 1, pageSize))} disabled={currentPage >= lastPage}><span className="sr-only">Go to next page</span><ChevronRightIcon className="h-4 w-4" /></Button>
            <Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => router.push(createPageURL(lastPage, pageSize))} disabled={currentPage >= lastPage}><span className="sr-only">Go to last page</span><DoubleArrowRightIcon className="h-4 w-4" /></Button>
          </div>
        </div>
      </div>
    );
}
