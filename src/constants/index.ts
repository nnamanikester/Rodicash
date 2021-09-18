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

// Light theme colors
export const LIGHT_COLORS: ColorsState = {
  background: '#FFFFFF',
  primary: '#1B2F5D',
  lightPrimary: '#1B2F5DBF',
  secondary: '#93E4A9',
  black: '#001029',
  white: '#FFFFFF',
  text: '#111111',
  grey: '#9FA5C0',
  lightGrey: '#DADADA30',
  inactive: '#C4C4C4',
  danger: '#FF6868',
  warning: '#FFCB27',
  success: '#93E4A9',
  blue: '#0014CC',
};

// Dark theme colors
export const DARK_COLORS: ColorsState = {
  background: '#FFFDFD',
  primary: '#0E69BD',
  lightPrimary: '#1B2F5DBF',
  secondary: '#93E4A9',
  black: '#001029',
  white: '#FFFFFF',
  text: '#111111',
  grey: '#9FA5C0',
  lightGrey: '#DADADA30',
  inactive: '#C4C4C4',
  danger: '#FF6868',
  warning: '#FFCB27',
  success: '#93E4A9',
  blue: '#0014CC',
};