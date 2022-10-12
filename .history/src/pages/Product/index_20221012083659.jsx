import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Modal } from '../../components/ui';

import products from '../../data/products';
import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
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
        <button>+</button>
        <button>-</button>
      </div>
      <p>Total Price: PKR 1000</p>
      <Button>Checkout</Button>
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
