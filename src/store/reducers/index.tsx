import {combineReducers} from 'redux';
import {AppSettingsType, authTokenType, ToastType, UserType} from '../types';
import token from './authTokenReducer';
import toast from './toastReducer';
import user from './userReducer';
import appSettings from './appSettingsReducer';

export interface IRootState {
  user: UserType;
  token: authTokenType;
  toast: ToastType;
  appSettings: AppSettingsType;
}

export default combineReducers<IRootState>({
  user,
  token,
  toast,
  appSettings,
});
