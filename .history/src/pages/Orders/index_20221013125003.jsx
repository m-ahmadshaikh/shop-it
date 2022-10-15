import React, { useContext } from 'react';
import { Card } from '../../components/ui';
import { AuthContext } from '../../context/AuthContext';
import useHttp from '../../hooks/useHttp';
import classes from './Orders.module.css';
function Orders() {
  const [data, loading, error] = useHttp(
    'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json'
  );
  const { email } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p className="error">{error}</p>;
  }
  if (data) {
    console.log(
      Object.values(data).filter((d) => {
        console.log(d.email === email);
      })
    );
    const dataElement = Object.values(data)
      .filter((d) => d.email === email)
      .map((d) => (
        <Card className={classes.card} key={d.orderId}>
          <h1>{d.orderDetails.name}</h1>
          <h1>{d.orderDetails.quantity}</h1>
        </Card>
      ));
    return (
      <div className="main">
        <p className="center">{dataElement}</p>
      </div>
    );
  } else {
    return (
      <div className="main">
        <h1 className="center">No Orders Found!</h1>
      </div>
    );
  }
}

export default Orders;
