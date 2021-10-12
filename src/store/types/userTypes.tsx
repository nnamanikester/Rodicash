export const SET_USER = 'SET_USER';

export interface setUser {
  type: typeof SET_USER;
  payload: UserType;
}

export interface UserType {
  email: string | null;
  name: string | null;
  token?: string | null;
  phone?: string;
  isActive?: boolean;
  isVerified?: boolean;
  account?: {
    balance: number;
    bvnVerified: boolean;
  };
}

export type UserActionTypes = setUser;
