import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ toggleShow, show = false, children }) {
  return (
    <div className={show ? classes.active : ''}>
      <Backdrop show={show} toggleShow={toggleShow} />
      <div className={classes.modal}>{children}</div>
    </div>
  );
}

export default Modal;
