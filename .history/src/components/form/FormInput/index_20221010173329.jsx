import React, { useState } from 'react';
import classes from './FormInput.module.css';
// eslint-disable-next-line react/display-name
const FormInput = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      aria-label={''}
      {...props}
      className={`${classes.input} ${props.className}`}
    />
  );
});

export default FormInput;
