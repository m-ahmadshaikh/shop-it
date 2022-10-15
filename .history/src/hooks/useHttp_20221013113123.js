import { useState } from 'react';

const useHttp = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetcher = async (data) => {
    try {
      setError(null);
      setIsLoading(true);
      const resData = await func(data);
      setData(resData);
      return resData;
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetcher, data, isLoading, error];
};

export default useHttp;
