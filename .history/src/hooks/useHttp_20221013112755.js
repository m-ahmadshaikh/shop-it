import { useState } from 'react';

const useHttp = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetcher = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      const resData = await func(data);
      console.log(resData);
      return resData;
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetcher, isLoading, error];
};

export default useHttp;
