import React from 'react';
import FormInput from '../../../components/form/FormInput';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import classes from './Form.module.css';
function Form() {
  return (
    <div className={classes.main}>
      <form className={classes.form} action="">
        <Card className={classes.card}>
          <h1>Sign in to Shop It</h1>
          <p>
            {'Dont have an account?'} <a href="#">Signup</a>
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
