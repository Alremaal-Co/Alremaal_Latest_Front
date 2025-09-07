import React from 'react';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { FloatingLabelInput } from '@/components/ui/floating-label-input';

export const renderInputField = (form: any, column: any, lang: 'en' | 'ar') => {
  const label = lang === 'ar' ? column.labelAr : column.labelEn;
  let type = "text";
  if (column.dataType === 'integer' || column.dataType === 'numeric') type = "number";
  if (column.columnName.includes('email')) type = "email";
  if (column.columnName.includes('password')) type = "password";

  return (
    <FormField
      control={form.control}
      name={column.columnName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <FloatingLabelInput 
              label={label}
              type={type}
              {...field} 
              value={field.value ?? ''} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};