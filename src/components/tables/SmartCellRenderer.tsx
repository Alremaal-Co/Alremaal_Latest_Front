import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";

export const SmartCellRenderer = ({ cell }: { cell: any }) => {
  const value = cell.getValue();
  if (value === null || value === undefined) return <span className="text-muted-foreground">N/A</span>;
  if (typeof value === 'boolean') return <Checkbox checked={value} disabled />;
  if (typeof value === 'number') return <div className="text-right font-medium">{new Intl.NumberFormat().format(value)}</div>;
  if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('/'))) {
    if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(value)) {
      return (
        <Avatar className="h-9 w-9"><AvatarImage src={value} alt="Image" /><AvatarFallback>{cell.row.original.name?.[0] || '?'}</AvatarFallback></Avatar>
      );
    }
  }
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-wrap gap-1">
        {value.slice(0, 3).map((item, index) => <Badge key={index} variant="secondary">{String(item)}</Badge>)}
        {value.length > 3 && <Badge variant="outline">+{value.length - 3} more</Badge>}
      </div>
    );
  }
  if (typeof value === 'object') return <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>;
  return <div className="truncate">{String(value)}</div>;
};