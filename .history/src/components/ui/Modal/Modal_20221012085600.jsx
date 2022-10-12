import React from 'react';
import Backdrop from '../Backdrop';
import { ReactDOM } from 'react-dom';
import classes from './Modal.module.css';
function Modal({ toggleShow, show = false, children }) {
  return ReactDOM.createPortal(
    <div className={show ? classes.active : ''}>
      <Backdrop show={show} toggleShow={toggleShow} />
      <div className={classes.modal}>{children}</div>
    </div>,
    document.getElementById('portal')
  );
}

export default Modal;
