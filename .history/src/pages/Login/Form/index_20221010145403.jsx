import React from 'react';
import Card from '../../components/ui/Card';

function Form() {
  return (
    <div>
      <Card>
        <h1>Sign in to Shop It</h1>
        <p>
          {'Dont have an account?'} <a href="#">Signup</a>
        </p>
        <input type="email" aria-label="email" />
        <input type="password" aria-label="password" />
        <button>Log in</button>
      </Card>
    </div>
  );
}

export default Form;
