import React from 'react';
import { Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  return (
    <div className={classes.main}>
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
          <p></p>
        </div>
      </Card>
    </div>
  );
}

export default CheckoutForm;
