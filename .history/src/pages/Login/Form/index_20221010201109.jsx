import React, { useState } from 'react';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils';
import { Button, Card, FormInput } from '../../../components/ui';

function Form() {
  const [authType, setAuthType] = useState('signin');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function toggleAuthType() {
    setAuthType((prev) => (prev === 'signin' ? 'signup' : 'signin'));
  }

  function submitHandler(data) {
    console.log(data, authType);
  }
  return (
    <div className={classes.main}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={classes.form}
        action="">
        <Card
          className={`${classes.card}  ${
            authType ? classes.active : classes.active
          }`}>
          <h1>
            {authType === 'signin' ? 'Sign in to Shop It' : 'Create an account'}
          </h1>
          <p>
            {authType === 'signin'
              ? "Don't have an account?"
              : 'Already have an account?'}{' '}
            <a onClick={toggleAuthType} href="#">
              {authType === 'signin' ? 'Sign in' : 'Sign up'}
            </a>
          </p>
          <FormInput
            name="email"
            placeholder="Email"
            type="email"
            aria-label="email"
            {...register('email')}
          />
          <p role="alert" className={classes.error}>
            {errors.email?.message}
          </p>
          <FormInput
            name="password"
            placeholder="Password"
            type="password"
            aria-label="password"
            {...register('password')}
          />
          <p role="alert" className={classes.error}>
            {errors.password?.message}
          </p>

          <Button className={classes.btn}>
            {authType === 'signin' ? 'Log in' : 'Sign up'}
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default Form;
