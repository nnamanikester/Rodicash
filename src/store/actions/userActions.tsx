import {USER_STORAGE} from '@/constants';
import EncryptedStorage from 'react-native-encrypted-storage';
import {SET_USER, UserType} from '../types';

export const setUser = (user: UserType) => {
  console.log('From setUser => ', user);
  return async (dispatch: any) => {
    await EncryptedStorage.setItem(USER_STORAGE, JSON.stringify(user));
    return dispatch({
      type: SET_USER,
      payload: user,
    });
  };
};
