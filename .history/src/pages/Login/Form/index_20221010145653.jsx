import React from 'react';
import Card from '../../../components/ui/Card';
import classes from './Form.module.css';
function Form() {
  return (
    <div>
      <form className={classes.form} action="">
        <Card className={classes.card}>
          <h1>Sign in to Shop It</h1>
          <p>
            {'Dont have an account?'} <a href="#">Signup</a>
          </p>
          <input type="email" aria-label="email" />
          <input type="password" aria-label="password" />
          <button>Log in</button>
        </Card>
      </form>
    </div>
  );
}

export default Form;
