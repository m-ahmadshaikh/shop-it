import React from 'react';
import classes from './Button.module.css';
function Button(props) {
  console.log(props);
  return <div {...props} className={`${classes.button} ${props.className}`} />;
}

export default Button;
