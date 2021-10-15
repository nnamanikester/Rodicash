import {combineReducers} from 'redux';
import {authTokenType, ToastType, UserType} from '../types';
import token from './authTokenReducer';
import toast from './toastReducer';
import user from './userReducer';

export interface IRootState {
  user: UserType;
  token: authTokenType;
  toast: ToastType;
}

export default combineReducers<IRootState>({
  user,
  token,
  toast,
});
