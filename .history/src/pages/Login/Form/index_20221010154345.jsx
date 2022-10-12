import React, { useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import classes from './Form.module.css';
function Form() {
  const [authType, setAuthType] = useState('signin');

  function toggleAuthType() {
    setAuthType((prev) => (prev === 'signin' ? 'signup' : 'signin'));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log('submit');
  }
  return (
    <div className={classes.main}>
      <form onSubmit={submitHandler} className={classes.form} action="">
        <Card className={classes.card}>
          <h1>{authType === 'signin' ? 'Sign in to Shop It' : 'Sign Up'}</h1>
          <p>
            {'Dont have an account?'}{' '}
            <a onClick={toggleAuthType} href="#">
              Signup
            </a>
          </p>
          <FormInput placeholder="Email" type="email" aria-label="email" />
          <FormInput
            placeholder="Password"
            type="password"
            aria-label="password"
          />
          <Button className={classes.btn}>Log in</Button>
        </Card>
      </form>
    </div>
  );
}

export default Form;
