import React from 'react';
import classes from './FormInput.module.css';
function FormInput(props) {
  return (
    <input
      {...props}
      className={`${classes.input} ${props.className}`}
      aria-label={''}
    />
  );
}

export default FormInput;
