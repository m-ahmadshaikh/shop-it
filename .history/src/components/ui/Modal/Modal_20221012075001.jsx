import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ onClick }) {
  return (
    <div>
      <Backdrop onClick={onClick} />
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
