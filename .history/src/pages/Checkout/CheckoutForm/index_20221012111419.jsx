import React, { useState } from 'react';
import { Button, Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
  });

  const onChange = (e) => {
    console.log(e);
    // const [name, value] = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.main}>
      <form action="">
        <Card className={classes.card}>
          <h1>Checkout</h1>
          <FormInput
            name="name"
            className={
              formData.name.length > 1 && formData.name.length < 5
                ? 'invalid'
                : ''
            }
            onChange={onChange}
            value={formData.name}
            placeholder="Name"
          />
          <FormInput
            name="contact"
            value={formData.contact}
            onChange={onChange}
            placeholder="Contact No"
          />
          <FormInput
            value={formData.address}
            name="address"
            onChange={onChange}
            placeholder="Address Line 1"
          />
          <FormInput onChange={onChange} placeholder="Address Line 2" />
          <FormInput onChange={onChange} placeholder="City" />

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
