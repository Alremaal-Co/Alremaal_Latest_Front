import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A wrapper around `twMerge` and `clsx` that uses the same API as `clsx`.
 *
 * @remarks
 *
 * This is useful when you want to conditionally apply classes, but also want
 * to take advantage of Tailwind's class merging and prefixing features.
 *
 * @example
 * cn('bg-red-500', condition && 'text-white')
 * // output: 'bg-red-500 text-white'
 *
 * cn('bg-red-500', { 'text-white': condition })
 * // output: 'bg-red-500 text-white'
 *
 * @param inputs - The class names or objects to merge.
 * @returns The merged class list.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
