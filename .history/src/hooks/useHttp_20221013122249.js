import axios from 'axios';
import { useEffect, useState } from 'react';

const useHttp = (url) => {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        setloading(true);
        setError(null);
        setData(await axios.get(url));
      } catch (e) {
        setError(e.message);
      } finally {
        setloading(false);
      }
    };
    fetcher();
  }, [url]);

  return [data, loading, error];
};

export default useHttp;
