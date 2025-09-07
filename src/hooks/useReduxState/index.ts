"use client"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { debounce, throttle } from 'lodash';
import { RootState } from '@/Store/store';
import { resetReduxState, setReduxState } from '@/Store/reduxSlice';

type UseReduxStateReturn<T> = [
  T,
  (newValue: T | ((prevValue: T) => T), saveToLocalStorage?: boolean) => void,
  () => void,
  boolean,
  string | null,
  () => void, 
  () => void 
];

const useReduxState = <T>(
  key: string,
  initialValue: T,
  debounceTime: number = 300,
  validate?: Array<(newValue: T) => boolean>,
  useThrottle: boolean = false
): UseReduxStateReturn<T> => {
  const dispatch = useDispatch();
  const reduxValue = useSelector<RootState, T | undefined>(
    (state: any) => state.reduxSlice[key],
    shallowEqual
  );

  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Load value from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        if (item) setStoredValue(JSON.parse(item));
      } catch (e) {
        console.error("Failed to parse stored value:", e);
      }
    }
  }, [key]);

  // Determine the current value
  const value = reduxValue ?? storedValue ?? initialValue;

  // Sync storedValue to Redux if reduxValue is undefined
  useEffect(() => {
    if (reduxValue === undefined && storedValue !== undefined) {
      dispatch(setReduxState({ key, value: storedValue }));
    }
  }, [dispatch, key, reduxValue, storedValue]);

  // Validate the new value
  const validateValue = (newValue: T): boolean => {
    if (validate) {
      for (const validateFn of validate) {
        if (!validateFn(newValue)) return false;
      }
    }
    return true;
  };

  // Update value function
  const updateValue = (newValue: T | ((prevValue: T) => T), saveToLocalStorage: boolean = false) => {
    setLoading(true);
    setError(null);
  
    try {
      let updatedValue: T;
  
      if (typeof newValue === 'function') {
        if (value === undefined) {
          throw new Error("Cannot update value: current value is undefined.");
        }
        updatedValue = (newValue as (prevValue: T) => T)(value);
      } else {
        updatedValue = newValue;
      }
  
      if (!validateValue(updatedValue)) {
        throw new Error("Validation failed.");
      }
  
      if (value !== updatedValue) {
        dispatch(setReduxState({ key, value: updatedValue }));
        if (saveToLocalStorage && typeof window !== "undefined") {
          // localStorage.setItem(key, JSON.stringify(updatedValue));
        }
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Debounce or throttle the updateValue function
  const setValue = useThrottle ? throttle(updateValue, debounceTime) : debounce(updateValue, debounceTime);

  // Reset value to initialValue
  const resetValue = () => {
    dispatch(resetReduxState({ key, initialValue }));
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  // Clear only localStorage
  const clearLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  // Clear only Redux state
  const clearReduxState = () => {
    dispatch(resetReduxState({ key, initialValue }));
  };

  return [value, setValue, resetValue, loading, error, clearLocalStorage, clearReduxState];
};

export default useReduxState;





