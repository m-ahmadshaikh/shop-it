import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';
import classes from './Modal.module.css';
function Modal({ toggleShow, show = false, children }) {
  return ReactDOM.createP(
    <div className={show ? classes.active : ''}>
      <Backdrop show={show} toggleShow={toggleShow} />
      <div className={classes.modal}>{children}</div>
    </div>
  );
}

export default Modal;
