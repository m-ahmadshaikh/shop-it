import React from 'react';
import classes from './Button.module.css';
function Button(props) {
  return (
    <button
      {...props}
      disabled={false}
      className={`${classes.button} ${props.className}`}
    />
  );
}

export default Button;
