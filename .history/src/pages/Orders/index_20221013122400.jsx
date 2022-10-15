import React from 'react';
import useHttp from '../../hooks/useHttp';

function Orders() {
  const [data, loading, error] = useHttp();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p className="error">{error}</p>;
  }
  if (data) {
    return <p>{data}</p>;
  }
}

export default Orders;
