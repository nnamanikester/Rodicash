import * as React from 'react';
import axios from 'axios';
import {API_URL} from '@/constants';

type registrationType = {
  name: string;
  email: string;
  password: string;
  phone: string;
  referralCode?: string;
};

type loginType = {
  email: string;
  password: string;
};

type resetPasswordType = {
  email: string;
};

// Data that needs to be passed to the @handle auth function
type authDataType = registrationType | loginType | resetPasswordType;

// Type of data expected to be returned from the useAuth hook
type hookReturnType = (
  D: authDataType,
) => [(type: 'register' | 'login') => void, boolean, any, any];

export const useAuth: hookReturnType = (options: authDataType) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  const handleAuth = (type: 'register' | 'login'): void => {
    setError(null);
    if (type === 'register') {
      handleRegister();
    } else if (type === 'login') {
      handleLogin();
    }
  };

  const handleLogin = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res: any = await axios.post(API_URL + '/auth/login', options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  const handleRegister = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res: any = await axios.post(API_URL + '/auth/register', options);
      setData(res.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [handleAuth, isLoading, data, error];
};
