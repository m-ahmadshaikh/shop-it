import React, { useContext, useEffect } from 'react';
import { redirect, useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, FormInput } from '../../../components/ui';

import useCheckoutForm from '../../../hooks/useCheckoutForm';
import classes from './CheckoutForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { globalContext } from '../../../context/Provider';
import setOrder from '../../../context/actions/checkout';
import { ORDER_RESET } from '../../../context/actionTypes';

function CheckoutForm() {
  const [formData, onChange, onBlur, isFormValid] = useCheckoutForm({
    name: { isValid: true, value: null },
    contact: { isValid: true, value: null },
    address: { isValid: true, value: null },
    address2: { isValid: true, value: '' },
    city: { isValid: true, value: '' },
  });
  const { state } = useLocation();
  const { checkoutState, checkoutDispatch, authState } =
    useContext(globalContext);
  const { loading: isLoading, error, success: completed } = checkoutState;
  const navigate = useNavigate();
  if (!state) {
    return redirect('/');
  }
  const { quantity, totalPrice, name } = state;

  const orderPageRedirectHandler = () => {
    navigate('/orders', { replace: true });
  };
  useEffect(() => {
    if (completed) {
      checkoutDispatch({ type: ORDER_RESET });
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const parsedFormData = Object.entries(formData)
        .map((entry) => {
          return { [entry[0]]: entry[1].value };
        })
        .reduce((acc, current) => {
          return Object.assign(acc, current);
        }, {});
      setOrder({
        orderID: uuidv4(),
        userInfo: parsedFormData,
        userID: authState.userID,
        orderDetails: {
          name,
          totalPrice,
          quantity,
          date: new Date(),
        },
      })(checkoutDispatch);
    }
  };

  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler}>
        <Card className={classes.card}>
          {error && <div className="authError">{error}</div>}
          {completed && (
            <p>
              Your order has been successfully placed and will be delivered in 7
              - 10 Business days. Please visit the{' '}
              <button
                className="flat-button"
                onClick={orderPageRedirectHandler}>
                Orders
              </button>{' '}
              page to view your orders
            </p>
          )}
          {!completed && (
            <>
              <h1>Checkout</h1>
              <FormInput
                name="name"
                className={formData.name.isValid ? '' : 'invalid'}
                onChange={onChange}
                onBlur={onBlur}
                value={formData.name.value ?? ''}
                placeholder="Name"
              />
              <FormInput
                name="contact"
                onBlur={onBlur}
                className={formData.contact.isValid ? '' : 'invalid'}
                value={formData.contact.value ?? ''}
                onChange={onChange}
                placeholder="Contact No"
              />
              <FormInput
                className={formData.address.isValid ? '' : 'invalid'}
                value={formData.address.value ?? ''}
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
            </>
          )}
        </Card>
      </form>
    </div>
  );
}

export default CheckoutForm;
