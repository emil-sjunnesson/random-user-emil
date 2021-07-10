import { useCallback, useEffect, useState } from 'react';
import { User } from '../types';

export interface FetchOtions {
  loadOnMount?: boolean;
}

// Hook used to fetch user data from randomuser.me API
const useFetchUser = ({ loadOnMount = false }: FetchOtions) => {
  const [userData, setUserData] = useState<User>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      const response = await fetch('https://randomuser.me/api/?noinfo&exc=login');

      if (response.status !== 200) {
        throw new Error('Failed to fetch user data');
      }

      const responseObj = await response.json();
      const user: User = responseObj.results[0];
      setUserData(user);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (loadOnMount) fetchUser();
  }, [loadOnMount, fetchUser]);

  return { userData, isLoading, error, fetchUser };
};

export default useFetchUser;
