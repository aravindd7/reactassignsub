import { useReducer } from 'react';

const defaultToggleFunction = (v: boolean): boolean => !v;

export function useToggle(
  initialValue: any = false,
  toggleFunction: (state: any, action: any) => any = defaultToggleFunction
): [any, (action: any) => any] {
  return useReducer(toggleFunction, initialValue);
}
