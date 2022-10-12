import React from 'react';
import { Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  return (
    <div className="main">
      <Card className={classes.card}>
        <h1>Checkout</h1>
        <FormInput placeholder="Name" />
        <FormInput placeholder="Contact No" />
        <FormInput placeholder="Address Line 1" />
        <FormInput placeholder="Address Line 2" />
        <FormInput placeholder="City" />
      </Card>
    </div>
  );
}

export default CheckoutForm;
