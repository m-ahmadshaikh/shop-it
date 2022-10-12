import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Modal } from '../../components/ui';

import products from '../../data/products';
import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onCheckOut = () => {
    setOpenModal(false);
    navigate('/checkout');
  };
  const product = products.find((p) => p.id === params.id);

  const cardElement = (
    <Card key={product.id} className={classes.card}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button onClick={toggleModal}>Order Now</Button>
    </Card>
  );

  const modalElement = (
    <Modal show={openModal} toggleShow={toggleModal}>
      <h3>{product.name}</h3>
      <p>Quantity: 5</p>
      <div className={classes.modal__btns}>
        <button onClick={() => {}} className={classes.btn}>
          -
        </button>
        <button onClick={() => {}} className={classes.btn}>
          +
        </button>
      </div>
      <p>Total Price: PKR 1000</p>
      <Button onClick={onCheckOut}>Checkout</Button>
    </Modal>
  );
  return (
    <>
      <div className={classes.main}>
        {modalElement}
        {cardElement}
      </div>
    </>
  );
}

export default Product;
