import {API_TOKEN, API_URL} from '@/constants';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  async (config: any) => {
    const token = await EncryptedStorage.getItem(API_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

export {apiService};
