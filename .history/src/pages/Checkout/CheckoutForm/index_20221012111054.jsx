import React, { useState } from 'react';
import { Button, Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  const [form, setForm] = useState({ name: '', contact: '', address: '' });

  const onChange = (e) => {
    const [name, value] = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(form);
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
              form.name.length > 1 && form.name.length < 5 ? 'invalid' : ''
            }
            onChange={onChange}
            placeholder="Name"
          />
          <FormInput
            name="contact"
            onChange={onChange}
            placeholder="Contact No"
          />
          <FormInput
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
