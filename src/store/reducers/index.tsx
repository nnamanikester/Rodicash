import {combineReducers} from 'redux';
import {UserType} from '../types';
import user from './userReducer';

export interface IRootState {
  user: UserType;
}

export default combineReducers<IRootState>({
  user,
});
