import React from 'react';
import classes from './Button.module.css';
function Button(props) {
  return (
    <button
      {...props}
      className={`${classes.button} ${props.className}`}
      disabled={true}
    />
  );
}

export default Button;
