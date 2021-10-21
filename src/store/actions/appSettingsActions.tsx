import EncryptedStorage from 'react-native-encrypted-storage';
import {APP_SETTINGS_STORAGE} from '@/constants';
import {AppSettingsType, SET_APP_SETTINGS} from '../types';

export const setAppSettings = (settings: AppSettingsType) => {
  return async (dispatch: any) => {
    await EncryptedStorage.setItem(
      APP_SETTINGS_STORAGE,
      JSON.stringify(settings),
    );
    return dispatch({type: SET_APP_SETTINGS, payload: settings});
  };
};
