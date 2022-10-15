import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Button, Card } from '../../components/ui';
import getOrders from '../../context/actions/order';
import { globalContext } from '../../context/Provider';

import classes from './Orders.module.css';
function Orders() {
  const { orderState, orderDispatch } = useContext(globalContext);
  const { loading, orders } = orderState;
  const onDelete = async (d) => {
    await axios.delete(
      'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json',
      { ...d }
    );
  };

  useEffect(() => {
    getOrders()(orderDispatch);
  }, []);
  if (loading || !orders) {
    return <p>Loading...</p>;
  }
  if (orders) {
    console.log(Object.values(orders));
    const dataElement = Object.values(orders)
      .filter((d) => d.email === 'email')
      .map((d) => (
        <Card className={classes.card} key={d.orderId}>
          <h1>{d.orderDetails.name}</h1>
          <h1>
            X {d.orderDetails.quantity} -- PKR {d.orderDetails.totalPrice}
          </h1>
          <Button onClick={() => onDelete(d)}>Cancel</Button>
        </Card>
      ));
    return (
      <div>
        <div className={classes.main}>{dataElement}</div>
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
