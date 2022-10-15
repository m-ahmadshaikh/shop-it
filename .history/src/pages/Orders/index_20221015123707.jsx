import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { Button, Card } from '../../components/ui';
import getOrders from '../../context/actions/order';
import { globalContext } from '../../context/Provider';

import classes from './Orders.module.css';
function Orders() {
  const { orderState, orderDispatch, authState } = useContext(globalContext);
  const { loading, orders } = orderState;
  const onDelete = async (d) => {
    console.log(d);
  };

  useEffect(() => {
    getOrders()(orderDispatch);
  }, []);
  if (loading || !orders) {
    return <p>Loading...</p>;
  }
  if (orders) {
    const dataElement = Object.entries(orders)
      .filter((d) => d[1].userID === authState.userID)
      .map((d) => (
        <Card className={classes.card} key={d[1].orderID}>
          <h1>{d[1].orderDetails.name}</h1>
          <h1>
            X {d[1].orderDetails.quantity} -- PKR {d[1].orderDetails.totalPrice}
          </h1>
          <Button onClick={() => onDelete(d[0])}>Cancel</Button>
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
