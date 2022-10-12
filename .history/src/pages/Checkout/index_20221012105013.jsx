import React from 'react';
import { Card, FormInput } from '../../components/ui';

function Checkout() {
  return (
    <Card>
      <h1>Checkout</h1>
      <FormInput placeholder="Name" />
      <FormInput placeholder="Contact No" />
      <FormInput placeholder="Address Line 1" />
      <FormInput placeholder="Address Line 2" />
      <FormInput placeholder="City" />
    </Card>
  );
}

export default Checkout;
