import { Skeleton } from "../ui/skeleton";

export function DataTableSkeleton() {
    return (
      <div className="space-y-4 p-8">
        <div className="flex items-center justify-between"><Skeleton className="h-8 w-48" /></div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <Skeleton className="h-8 w-[250px]" /><Skeleton className="h-8 w-[120px]" /><Skeleton className="h-8 w-[120px]" />
          </div>
          <Skeleton className="ml-auto hidden h-8 w-20 lg:flex" />
        </div>
        <div className="rounded-md border">
          <div>
            <div className="border-b"><div className="flex h-12 items-center px-4">{Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-6 w-full mx-2" />)}</div></div>
            <div>{Array.from({ length: 10 }).map((_, i) => <div key={i} className="flex h-12 items-center border-b px-4">{Array.from({ length: 6 }).map((_, j) => <Skeleton key={j} className="h-6 w-full mx-2" />)}</div>)}</div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex-1"><Skeleton className="h-6 w-40" /></div>
          <div className="flex items-center space-x-6 lg:space-x-8"><Skeleton className="h-8 w-40" /><Skeleton className="h-8 w-[100px]" /><Skeleton className="h-8 w-32" /></div>
        </div>
      </div>
    );
}