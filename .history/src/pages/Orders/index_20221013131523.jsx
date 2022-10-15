import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Card } from '../../components/ui';
import { AuthContext } from '../../context/AuthContext';
import useHttp from '../../hooks/useHttp';
import classes from './Orders.module.css';
function Orders() {
  const [data, loading, error] = useHttp(
    'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json'
  );
  const [isDeleted, setIsDeleted] = useState(false);
  const { email } = useContext(AuthContext);
  const onDelete = async (d) => {
    await axios.delete(
      'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json',
      { ...d }
      setIsDeleted(true)
    );
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    <p className="error">{error}</p>;
  }
  if (data) {
    const dataElement = Object.values(data)
      .filter((d) => d.email === email)
      .map((d) => (
        <Card className={classes.card} key={d.orderId}>
          {isDeleted && <></>}
          <h1>{d.orderDetails.name}</h1>
          <h1>
            X {d.orderDetails.quantity} -- PKR {d.orderDetails.totalPrice}
          </h1>
          <Button onClick={() => onDelete(d)}>Cancel</Button>
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
