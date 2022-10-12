import React, { useState } from 'react';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils';
import { Button, Card, FormInput } from '../../../components/ui';
import useAuth from '../../../hooks/useAuth';
import { Puff } from 'react-loader-spinner';

function Form() {
  const [authType, setAuthType] = useState('signin');
  const { login, error, isLoading } = useAuth();
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
    login({ ...data, authType });
  }
  return (
    <div className={classes.main}>
      {
        <Puff
          height="100%"
          width="100%"
          radius="12"
          color="darkgray"
          ariaLabel="three-dots-loading"
        />
      }

      {!isLoading && (
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={classes.form}
          action="">
          <Card key={authType} className={`${classes.card}  ${classes.active}`}>
            {error && <p className={classes.authError}>{error}</p>}

            <h1>
              {authType === 'signin'
                ? 'Sign in to Shop It'
                : 'Create an account'}
            </h1>
            <p>
              {authType === 'signin'
                ? "Don't have an account?"
                : 'Already have an account?'}{' '}
              <a onClick={toggleAuthType} href="#">
                {authType === 'signin' ? 'Sign up' : 'Sign in'}
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
      )}
    </div>
  );
}

export default Form;
