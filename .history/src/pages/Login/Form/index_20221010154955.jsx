import React, { useState } from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import classes from './Form.module.css';
function Form() {
  const [authType, setAuthType] = useState('signin');
  const [form, setForm] = useState({ email: '', password: '' });

  function changeHandler(e) {
    const { name, value } = e.target;
    console.log(name, value);
  }

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
            onChange={changeHandler}
            name="email"
            placeholder="Email"
            type="email"
            aria-label="email"
          />
          <FormInput
            onChange={changeHandler}
            name="password"
            placeholder="Password"
            type="password"
            aria-label="password"
          />
          <Button className={classes.btn}>
            {authType === 'signin' ? 'Log in' : 'Sign up'}
          </Button>
        </Card>
      </form>
    </div>
  );
}

export default Form;
