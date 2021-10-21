import * as React from 'react';
import {apiService} from '@/services';

type requestType = 'request' | 'reset';

type onPasswordResetType = {
  type: requestType;
  data: any;
};

type hookType = () => [
  (options: onPasswordResetType) => void,
  boolean,
  any,
  any,
];

export const useResetPassword: hookType = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  const onPasswordReset = (options: onPasswordResetType) => {
    if (options.type === 'request') {
      handleRequestPasswordReset(options.data);
    } else if (options.type === 'reset') {
      handleResetPassword(options.data.code, options.data.password);
    }
  };

  const handleResetPassword = async (code: string, password: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await apiService.post('/auth/password-reset', {
        code,
        password,
      });
      setData(res.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  const handleRequestPasswordReset = async (email: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await apiService.post('/auth/request-password-reset', {
        email,
      });
      setData(res.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [onPasswordReset, isLoading, data, error];
};
