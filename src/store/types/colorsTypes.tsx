export const CHANGE_MODE = 'CHANGE_MODE';

export interface IChangeMode {
  type: typeof CHANGE_MODE;
  payload: 'dark' | 'light';
}

export interface ColorsState {
  background: string;
  primary: string;
  lightPrimary: string;
  secondary: string;
  black: string;
  white: string;
  text: string;
  grey: string;
  lightGrey: string;
  inactive: string;
  danger: string;
  warning: string;
  success: string;
  blue: string;
}

export type ColorActionsType = IChangeMode;
