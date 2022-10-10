import React from 'react';
import classes from './Backdrop.module.css';
const Backdrop = (props) => {
  const clickHandler = () => {
    props.toggleShow();
  };

  return props.show ? (
    <div
      onClick={clickHandler}
      className={`${classes.Backdrop} ${props.classes}`}></div>
  ) : null;
};

export default Backdrop;
