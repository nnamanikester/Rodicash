import * as React from 'react';
import {apiService} from '@/services';

type hookType = () => [(username: string) => Promise<void>, boolean, any, any];

export const useCreateUsername: hookType = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);

  const createUsername = async (username: string): Promise<void> => {
    setError(null);
    setIsLoading(true);
    try {
      const res: any = await apiService.post('users/me/username', {username});
      setData(res.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.response.data);
      setIsLoading(false);
    }
  };

  return [createUsername, isLoading, data, error];
};
