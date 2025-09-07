"use client";
import { z } from "zod";
import { generateExpenseColumns } from "./generate-columns";
import { categories, incomeType } from "./data";
import { DataTableConfig } from "./types";
import { ColumnDef } from "@tanstack/react-table";

export const expenseSchema = z.object({
  id: z.string(),
  label: z.string(),
  note: z.string(),
  category: z.string(),
  type: z.enum(["income", "expense"]),
  amount: z.number(),
  date: z.string()
});

export type Expense = z.infer<typeof expenseSchema>;

const expenseData: Expense[] = [
  {
    id: "EXP-728ed52f",
    label: "Groceries",
    note: "Weekly shopping at the supermarket",
    category: "food",
    type: "expense",
    amount: 75.5,
    date: "2025-09-01T10:00:00.000Z"
  },
  {
    id: "EXP-489e1d42",
    label: "Salary",
    note: "Monthly salary deposit",
    category: "income",
    type: "income",
    amount: 3000,
    date: "2025-09-01T09:00:00.000Z"
  },
  {
    id: "EXP-f8b4a2c1",
    label: "Electricity Bill",
    note: "Payment for August electricity consumption",
    category: "utilities",
    type: "expense",
    amount: 120.0,
    date: "2025-09-03T14:30:00.000Z"
  },
  {
    id: "EXP-a1d9b3c4",
    label: "Freelance Project",
    note: "Payment for web design project",
    category: "income",
    type: "income",
    amount: 500,
    date: "2025-09-04T11:00:00.000Z"
  }
];

export const expenseTableConfig: Omit<DataTableConfig<Expense, any>, 'columns'> & { columns: () => ColumnDef<Expense>[] } = {
  data: expenseData,
  columns: generateExpenseColumns, 
  toolbar: {
    searchColumn: "note",
    searchPlaceholder: "Filter notes...",
    facetedFilters: [
      {
        columnId: "category",
        title: "Category",
        options: categories
      },
      {
        columnId: "type",
        title: "Type",
        options: incomeType
      }
    ]
  }
};