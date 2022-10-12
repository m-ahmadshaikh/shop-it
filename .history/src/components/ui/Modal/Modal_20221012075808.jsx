import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ toggleModal, open = false }) {
  return (
    <div className={open ? classes.active : ''}>
      <Backdrop show={open} toggleShow={toggleModal} />
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
