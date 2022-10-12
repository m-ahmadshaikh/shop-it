import React, { useState } from 'react';
import { Button, Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: { isValid: false, value: '' },
    contact: { isValid: false, value: '' },
    address: { isValid: false, value: '' },
  });
  const validate = (name, value) => {
    if (name === 'name') {
      if (value > 0 && value < 2) {
        return false;
      } else {
        return true;
      }
    }
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isValid: validate(name, value),
      },
    }));
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
            className={formData.name.isValid ? '' : 'invalid'}
            onChange={onChange}
            value={formData.name.value}
            placeholder="Name"
          />
          <FormInput
            name="contact"
            className={formData.contact.isValid ? '' : 'invalid'}
            value={formData.contact.value}
            onChange={onChange}
            placeholder="Contact No"
          />
          <FormInput
            className={formData.address.isValid ? '' : 'invalid'}
            value={formData.address.value}
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
