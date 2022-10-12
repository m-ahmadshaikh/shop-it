import React from 'react';
import classes from './FormInput.module.css';
function React.forwardRef(FormInput(props) {
  return (
    <input
      aria-label={''}
      {...props}
      className={`${classes.input} ${props.className}`}
    />
  );
})

export default FormInput;
