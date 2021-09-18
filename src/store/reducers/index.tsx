import {combineReducers} from 'redux';
import {ColorsState} from '../types';
import colors from './colorsReducer';

export interface IRootState {
  colors: ColorsState;
}

export default combineReducers<IRootState>({
  colors,
});
