import {SET_TOAST, ToastActionTypes} from '../types';

export const setToast = (message: string): ToastActionTypes => {
  return {
    type: SET_TOAST,
    payload: message,
  };
};
