import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Modal } from '../../components/ui';
import { deleteOrder, getOrders } from '../../context/actions/order';
import { globalContext } from '../../context/Provider';

import classes from './Orders.module.css';
function Orders() {
  const [showModal, setShowModal] = useState(false);
  const { orderState, orderDispatch, authState } = useContext(globalContext);
  const { loading, orders } = orderState;

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onDelete = async (id) => {
    toggleModal();
    // deleteOrder(id)(orderDispatch);
  };

  useEffect(() => {
    getOrders()(orderDispatch);
  }, []);

  let content = 'No orders found..';
  if (loading) {
    content = 'Loading....';
  }
  if (orders) {
    content = Object.entries(orders)
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
  }

  return (
    <>
      <Modal show={showModal} toggleShow={toggleModal}>
        <h1>Are you sure you want to cancel this order?</h1>
        <Button>No</Button>
        <Button>Yes</Button>
      </Modal>
      <div className={classes.main}>{content}</div>
    </>
  );
}

export default Orders;
