import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Card } from '../../components/ui';
import { AuthContext } from '../../context/AuthContext';
import useHttp from '../../hooks/useHttp';
import classes from './Orders.module.css';
function Orders() {
  const [data, loading, error] = useHttp(
    'https://shop-it-58f9a-default-rtdb.firebaseio.com/orders.json'
  );
  const { email } = useContext(AuthContext);

  const onDelete = async () => {
    const orderID = Object.entries(data).filter(
      (d) => d[1].email === email
    )[0][0];
    await axios.post('/');
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
          <h1>{d.orderDetails.name}</h1>
          <h1>
            X {d.orderDetails.quantity} -- PKR {d.orderDetails.totalPrice}
          </h1>
          <Button onClick={onDelete}>Cancel</Button>
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
