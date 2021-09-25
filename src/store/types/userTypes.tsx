export const SET_USER = 'SET_USER';

export interface setUser {
  type: typeof SET_USER;
  payload: UserType;
}

export interface UserType {
  token?: string | null;
  email: string | null;
  name: string | null;
}

export type UserActionTypes = setUser;
