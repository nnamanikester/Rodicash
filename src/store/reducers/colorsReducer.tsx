import {CHANGE_MODE, ColorActionsType, ColorsState} from '../types';

const dark: ColorsState = {
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

const light: ColorsState = {
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

const INITIAL_STATE: ColorsState = light;

export default (
  state = INITIAL_STATE,
  action: ColorActionsType,
): ColorsState => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.payload == 'dark' ? dark : light;
    default:
      return state;
  }
};
