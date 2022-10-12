import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ onClick, open = false }) {
  return (
    <div className={open ? classes.active : ''}>
      <Backdrop toggleShow={onClick} />
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
