import { useState } from 'react';

const useHttp = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetcher = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      return await func(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetcher, isLoading, error];
};

export default useHttp;
