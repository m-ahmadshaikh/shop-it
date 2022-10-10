import React from 'react';
import classes from './Backdrop.module.css';
function Backdrop({ children }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.background}></div>
      <div className={classes.foreground}>{children}</div>
    </div>
  );
}

export default Backdrop;
