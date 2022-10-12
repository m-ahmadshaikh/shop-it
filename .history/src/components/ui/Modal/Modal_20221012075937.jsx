import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ toggleModal, show = false }) {
  return (
    <div className={show ? classes.active : ''}>
      <Backdrop show={show} toggleShow={toggleModal} />
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
