import {SET_USER, UserActionTypes, UserType} from '../types';

export const setUser = (user: UserType): UserActionTypes => {
  return {
    type: SET_USER,
    payload: user,
  };
};
