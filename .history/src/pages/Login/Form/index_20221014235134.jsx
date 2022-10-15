import React, { useContext, useEffect, useState } from 'react';
import classes from './Form.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, FormInput } from '../../../components/ui';
import { authFormValidatingSchema } from '../../../utils';
import { globalContext } from '../../../context/Provider';
import { authenticate } from '../../../context/actions/auth';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [authType, setAuthType] = useState('signin');
  const { authState, authDispatch } = useContext(globalContext);
  const { loading, error } = authState;
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.userID) {
      navigate('/', { replace: true });
    }
  }, [authState.userID]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authFormValidatingSchema),
  });

  function toggleAuthType() {
    setAuthType((prev) => (prev === 'signin' ? 'signup' : 'signin'));
  }

  function submitHandler(data) {
    authenticate({ ...data, authType })(authDispatch);
  }
  return (
    <div className={classes.main}>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className={classes.form}
        action="">
        <Card key={authType} className={`${classes.card}  ${classes.active}`}>
          {error && <p className={classes.authError}>{error}</p>}

          <h1>
            {authType === 'signin' ? 'Sign in to Shop It' : 'Create an account'}
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

          <Button disabled={loading} className={classes.btn}>
            {loading ? 'Loading' : authType === 'signin' ? 'Log in' : 'Sign up'}
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default Form;
