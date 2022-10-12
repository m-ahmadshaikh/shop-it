import React from 'react';
import Card from '../../components/ui/Card';

function Login() {
  return (
    <div className="main">
      <Card>
        <h1>Sign in to Shop It</h1>
        <p>
          {'Dont have an account?'} <a href="#">Signup</a>
        </p>
        <input type="email" aria-label="" />
        <input type="password" aria-label="" />
        <button>Log in</button>
      </Card>
    </div>
  );
}

export default Login;
