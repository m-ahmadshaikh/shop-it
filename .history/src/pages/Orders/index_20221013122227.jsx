import React from 'react';
import useHttp from '../../hooks/useHttp';

function Orders() {
  const [data, loading, error] = useHttp();
  return <div>Orders</div>;
}

export default Orders;
