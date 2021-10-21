export const SET_TOAST = 'SET_TOAST';

export interface setToast {
  type: typeof SET_TOAST;
  payload: string;
}

export type ToastType = string;

export type ToastActionTypes = setToast;
