import { Skeleton } from "@/components/ui/skeleton";

export function DataTableSkeleton() {
  return (
    <div className="h-full flex-1 flex-col space-y-2 p-8 md:flex">
       <div className="flex items-center justify-between space-y-2">
        <div>
          <Skeleton className="h-8 w-48" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-1 flex-wrap items-center gap-2">
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-8 w-[120px]" />
            <Skeleton className="h-8 w-[120px]" />
          </div>
          <Skeleton className="ml-auto hidden h-8 w-20 lg:flex" />
        </div>
        <div className="rounded-md border">
          <div className="w-full">
            <div className="border-b">
              <div className="flex h-12 items-center px-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-full mx-2" />
                ))}
              </div>
            </div>
            <div>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex h-12 items-center border-b px-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Skeleton key={j} className="h-6 w-full mx-2" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center space-x-6 lg:space-x-8 justify-between w-full">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-40" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-64" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}