import {API_URL} from '@/constants';
import {store} from '@/store';
import axios from 'axios';

const apiService = axios.create({
  baseURL: API_URL,
});

apiService.interceptors.request.use(
  (config: any) => {
    const {user} = store.getState();
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);

export {apiService};
