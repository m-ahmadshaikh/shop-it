import React from 'react';

function Modal({ onClick }) {
  return (
    <div>
      <Backdrop onClick={setOpenModal} />
      <div className={classes.modal}></div>
    </div>
  );
}

export default Modal;
