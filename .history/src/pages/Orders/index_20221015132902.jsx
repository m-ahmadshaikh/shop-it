import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Modal } from '../../components/ui';
import { deleteOrder, getOrders } from '../../context/actions/order';
import { globalContext } from '../../context/Provider';
let deleteItemId;

import classes from './Orders.module.css';
function Orders() {
  const [showModal, setShowModal] = useState(false);
  const { orderState, orderDispatch, authState } = useContext(globalContext);
  const { loading, orders } = orderState;
  console.log(deleteItemId);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
    if (showModal) {
      deleteItemId = null;
    }
  };

  const onDelete = () => {
    toggleModal();
  };
  const deleteItem = () => {
    deleteOrder(deleteItemId)(orderDispatch);
    deleteItemId = null;
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
          <Button
            onClick={() => {
              deleteItemId = d[0];
              onDelete();
            }}>
            Cancel
          </Button>
        </Card>
      ));
  }

  return (
    <>
      <Modal show={showModal} toggleShow={toggleModal}>
        <p>Are you sure you want to cancel this order?</p>
        <Button onClick={toggleModal}>No</Button>
        <Button onClick={() => deleteItem()}>Yes</Button>
      </Modal>
      <div className={classes.main}>{content}</div>
    </>
  );
}

export default Orders;
