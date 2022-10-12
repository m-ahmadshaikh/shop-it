import React from 'react';
import classes from './FormInput.module.css';
function FormInput(props) {
  return (
    <input
      aria-label={''}
      {...props}
      className={`${classes.input} ${props.className}`}
    />
  );
}

export default FormInput;
