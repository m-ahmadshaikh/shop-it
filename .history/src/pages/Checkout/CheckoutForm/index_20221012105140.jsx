import React from 'react';

function CheckoutForm() {
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

export default CheckoutForm;
