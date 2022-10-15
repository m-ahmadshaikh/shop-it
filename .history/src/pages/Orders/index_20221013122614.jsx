import React from 'react';
import useHttp from '../../hooks/useHttp';

function Orders() {
  const [data, loading, error] = useHttp(
    'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json'
  );
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p className="error">{error}</p>;
  }
  if (data) {
    return <p>{JSON.stringify(data)}</p>;
  } else {
    return <div className="main">No Orders Found!</div>;
  }
}

export default Orders;
