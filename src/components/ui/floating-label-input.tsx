// المسار: src/components/ui/floating-label-input.tsx

import * as React from 'react';
import { cn } from '@/lib/utils'; // تأكد من أن هذا المسار صحيح لمشروعك

export interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, type, label, ...props }, ref) => {
  const id = props.id || React.useId();

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        ref={ref}
        className={cn(
          'peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-3 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500',
          className
        )}
        placeholder=" " // هام جداً: يجب أن يحتوي على مسافة فارغة ليعمل التأثير
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute right-3 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-4 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-background dark:text-gray-400 dark:peer-focus:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
});
FloatingLabelInput.displayName = 'FloatingLabelInput';

export { FloatingLabelInput };