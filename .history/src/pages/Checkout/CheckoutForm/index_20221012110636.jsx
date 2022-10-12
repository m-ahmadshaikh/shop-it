import React, { useState } from 'react';
import { Button, Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  const [form, setForm] = useState({ name: '', contact: '', address: '' });
  return (
    <div className={classes.main}>
      <form action="">
        <Card className={classes.card}>
          <h1>Checkout</h1>
          <FormInput placeholder="Name" />
          <FormInput placeholder="Contact No" />
          <FormInput placeholder="Address Line 1" />
          <FormInput placeholder="Address Line 2" />
          <FormInput placeholder="City" />

          <h1>Order Summary</h1>

          <div className={classes.productCard}>
            <h1>Lenovo Yoga Book</h1>
            <p>Quantity: 1</p>
            <p>Total Price: 90000</p>
          </div>

          <Button>Order</Button>
        </Card>
      </form>
    </div>
  );
}

export default CheckoutForm;
