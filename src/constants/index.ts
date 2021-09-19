export interface ColorsState {
  background: string;
  primary: string;
  secondary: string;
  green1: string;
  green2: string;
  orange1: string;
  orange2: string;
  black: string;
  white: string;
  text: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  warning: string;
  transparent: string;
}

// Light theme colors
export const LIGHT_COLORS: ColorsState = {
  background: '#FFFFFF',
  primary: '#3AC295',
  secondary: '#D0981B',
  green1: '#3AC295',
  green2: '#067C55',
  orange1: '#F1C35D',
  orange2: '#D0981B',
  black: '#0E253A',
  white: '#FFFFFF',
  text: '#0E253A',
  gray1: '#3D5E7B',
  gray2: '#8AA3B9',
  gray3: '#D4E1EC',
  gray4: '#F4F6FA',
  warning: '#FF5244',
  transparent: 'rgba(255, 255, 255, 0.24)',
};

// Dark theme colors
export const DARK_COLORS: ColorsState = {
  background: '#3AC295',
  primary: '#3AC295',
  secondary: '#3AC295',
  green1: '#3AC295',
  green2: '#067C55',
  orange1: '#F1C35D',
  orange2: '#D0981B',
  black: '#0E253A',
  white: '#FFFFFF',
  text: '#0E253A',
  gray1: '#3D5E7B',
  gray2: '#8AA3B9',
  gray3: '#D4E1EC',
  gray4: '#F4F6FA',
  warning: '#FF5244',
  transparent: 'rgba(255, 255, 255, 0.24)',
};
