import {SET_TOKEN} from '../types';

export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};
