import React, { useState } from 'react';
import { Button, Card, FormInput } from '../../../components/ui';
import classes from './CheckoutForm.module.css';
function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: { isValid: true, value: '' },
    contact: { isValid: true, value: '' },
    address: { isValid: true, value: '' },
    address2: { isValid: true, value: '' },
    city: { isValid: true, value: '' },
  });
  const validate = (name, value) => {
    if (name === 'name') {
      if (value.length > 0 && value.length < 2) {
        return false;
      } else {
        return true;
      }
    }
    if (name === 'contact') {
      if (value.length > 0 && value.length < 5) {
        return false;
      } else {
        return true;
      }
    }
    if (name === 'address') {
      if (value.length > 0 && value.length < 8) {
        return false;
      } else {
        return true;
      }
    }
    return true;
  };
  const onBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isValid: value === '' ? false : true,
      },
    }));
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
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      Object.entries(formData).every((f) => {
        console.log(f[1]);
        return f[1] === true;
      })
    ) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  };

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler}>
        <Card className={classes.card}>
          <h1>Checkout</h1>
          <FormInput
            name="name"
            className={formData.name.isValid ? '' : 'invalid'}
            onChange={onChange}
            onBlur={onBlur}
            value={formData.name.value}
            placeholder="Name"
          />
          <FormInput
            name="contact"
            onBlur={onBlur}
            className={formData.contact.isValid ? '' : 'invalid'}
            value={formData.contact.value}
            onChange={onChange}
            placeholder="Contact No"
          />
          <FormInput
            className={formData.address.isValid ? '' : 'invalid'}
            value={formData.address.value}
            name="address"
            onBlur={onBlur}
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
