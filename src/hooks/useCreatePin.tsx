import {apiService} from '@/services';
import * as React from 'react';

type hookType = () => [(pin: string) => void, boolean, any, any];

export const useCreatePin: hookType = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  const [data, setData] = React.useState<any>(null);

  const handleCreatePin = async (pin: string) => {
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await apiService.post('/users/me/pin', {pin});
      setData(res.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [handleCreatePin, isLoading, data, error];
};
