import {SET_TOAST, ToastActionTypes, ToastType} from '../types';

const INITIAL_STATE = '';

export default (state: ToastType = INITIAL_STATE, action: ToastActionTypes) => {
  switch (action.type) {
    case SET_TOAST:
      return action.payload;
    default:
      return state;
  }
};
