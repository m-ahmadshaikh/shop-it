import React from 'react';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ toggleShow, show = false }) {
  return (
    <Backdrop show={show} toggleShow={toggleShow} />
    <div className={show ? classes.active : ''}>
      
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
