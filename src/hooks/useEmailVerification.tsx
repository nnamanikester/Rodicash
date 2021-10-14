import {API_URL} from '@/constants';
import axios from 'axios';
import * as React from 'react';

// Type of data to pass to thet verifyEmail function
type bodyType = {
  email: string;
  code: string;
};

// Type of data to be returned from the hook
type hookType = () => [
  (body: bodyType) => void,
  boolean,
  any,
  any,
  (email: string) => Promise<void>,
];

export const useEmailVerification: hookType = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  const verifyEmail = async (body: bodyType): Promise<void> => {
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await axios.post(API_URL + '/auth/verify', body);
      setData(res.data.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  const resend = async (email: string): Promise<void> => {
    setError(null);
    setIsLoading(true);
    try {
      await axios.post(API_URL + '/auth/resend-token', {email});
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [verifyEmail, isLoading, data, error, resend];
};
