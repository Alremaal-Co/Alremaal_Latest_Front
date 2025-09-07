"use client";

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === null || value === 'undefined' ? undefined : JSON.parse(value);
  } catch {
    console.error('Parsing error on', { value });
    return undefined;
  }
}

export function usePersistentState<T>(
  storageKey: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey);
    if (storedValue !== null) {
      const parsedValue = parseJSON<T>(storedValue);
      if (parsedValue !== undefined) {
        setValue(parsedValue);
      }
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]);

  return [value, setValue];
}