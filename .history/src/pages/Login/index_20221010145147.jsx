import React from 'react';
import Card from '../../components/ui/Card';

function Login() {
  return (
    <div className="main">
      <Card>
        <h1>Sign in to Shop It</h1>
        <p>{'Dont have an account?'}</p> <a href="#">Signup</a>
      </Card>
    </div>
  );
}

export default Login;
