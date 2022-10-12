import React from 'react';
import classes from './FormInput.module.css';
const FormInput = (props) => {
  return (
    <input
      aria-label={''}
      {...props}
      className={`${classes.input} ${props.className}`}
    />
  );
};

export default FormInput;
