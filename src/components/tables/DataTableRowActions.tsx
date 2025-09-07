import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { DropdownMenu , DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useDynamicDataOperationsContext } from "@/lib/api/DynamicDataOperationsApi";
import { toast } from "sonner";

export function DataTableRowActions<TData>({ row }: { row: any }) {
    const { states: dynamicDataStates, queries , actions } = useDynamicDataOperationsContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Make a copy</DropdownMenuItem>
        <DropdownMenuItem>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={()=>{actions?.remove.execute(undefined , {
          onSuccess(data, context) {
            toast.success("Column deleted successfully!");
          },
          onError(error, context) {
           console.log("error" , error)
            
          },
          pathParams:{
            id:row.original.id
          }
        })}}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}