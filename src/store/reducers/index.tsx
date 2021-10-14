import {combineReducers} from 'redux';
import {authTokenType, UserType} from '../types';
import user from './userReducer';
import token from './authTokenReducer';

export interface IRootState {
  user: UserType;
  token: authTokenType;
}

export default combineReducers<IRootState>({
  user,
  token,
});
