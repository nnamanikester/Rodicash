export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';

export interface setUser {
  type: typeof SET_USER;
  payload: UserType;
}

export interface setToken {
  type: typeof SET_TOKEN;
  payload: string;
}

export interface UserType {
  email: string | null;
  name: string | null;
  token?: string | null;
  phone?: string;
  isActive?: boolean;
  isVerified?: boolean;
  username?: string;
  account?: {
    balance: number;
    bvnVerified: boolean;
  };
}

export type UserActionTypes = setUser | setToken;
