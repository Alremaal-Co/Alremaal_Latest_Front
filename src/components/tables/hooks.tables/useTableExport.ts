import { Table } from "@tanstack/react-table";
import { toast } from "sonner";

export const useTableExport = <TData,>(table: Table<TData>) => {
  const handleExport = (fileName: string = "table_data.csv") => {
    try {
      const headers = table.getVisibleLeafColumns()
        .map(col => col.id)
        .filter(id => !['select', 'actions'].includes(id))
        .join(',');

      const rows = table.getRowModel().rows.map(row => 
        row.getVisibleCells()
          .filter(cell => !['select', 'actions'].includes(cell.column.id))
          .map(cell => {
            const value = cell.getValue();
            if (typeof value === 'string') return `"${value.replace(/"/g, '""')}"`;
            return value;
          }).join(',')
      ).join('\n');
      
      const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`;
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Data exported successfully!");
    } catch (error) {
      toast.error("Failed to export data.");
    }
  };

  return { handleExport };
};