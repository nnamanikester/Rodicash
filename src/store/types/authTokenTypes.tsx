export const SET_TOKEN = 'SET_TOKEN';

export type setToken = {
  type: typeof SET_TOKEN;
  payload: string;
};

export type authTokenType = string | null;

export type authTokenActionTypes = setToken;
