import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Card, FormInput } from '../../../components/ui';
import useCheckoutForm from '../../../hooks/useCheckoutForm';
import { checkout } from '../../../services/databaseApi';
import classes from './CheckoutForm.module.css';

function CheckoutForm() {
  const [formData, onChange, onBlur, isFormValid] = useCheckoutForm({
    name: { isValid: true, value: '' },
    contact: { isValid: true, value: '' },
    address: { isValid: true, value: '' },
    address2: { isValid: true, value: '' },
    city: { isValid: true, value: '' },
  });
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { quantity, totalPrice, name } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (Object.entries(formData).every((f) => f[1].isValid === true)) {
      try {
        setIsLoading(true);
        setError(null);
        await checkout();
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler}>
        <Card className={classes.card}>
          {error && <div className="authError">{error}</div>}
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
            <h1>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p>Total Price: {totalPrice}</p>
          </div>

          <Button disabled={!isFormValid}>
            {isLoading ? 'Ordering' : 'Order'}
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default CheckoutForm;
