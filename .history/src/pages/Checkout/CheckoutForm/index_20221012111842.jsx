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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
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
            className={formData.name.length < 1 ? 'invalid' : ''}
            onChange={onChange}
            value={formData.name}
            placeholder="Name"
          />
          <FormInput
            name="contact"
            className={
              formData.contact.length > 1 && formData.contact.length < 5
                ? 'invalid'
                : ''
            }
            value={formData.contact}
            onChange={onChange}
            placeholder="Contact No"
          />
          <FormInput
            className={
              formData.address.length > 1 && formData.address.length < 7
                ? 'invalid'
                : ''
            }
            value={formData.address}
            name="address"
            onChange={onChange}
            placeholder="Address Line 1"
          />
          <FormInput
            name="address2"
            onChange={onChange}
            placeholder="Address Line 2"
          />
          <FormInput name="city" onChange={onChange} placeholder="City" />

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
