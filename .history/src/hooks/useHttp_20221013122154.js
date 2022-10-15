import axios from 'axios';
import { useEffect, useState } from 'react';

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setData(await axios.get(url));
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetcher();
  }, []);

  return [data, isLoading, error];
};

export default useHttp;
