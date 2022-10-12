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

  return (
    <>
      <div className={classes.main}>
        <Modal show={openModal} toggleShow={toggleModal}></Modal>
        {cardElement}
      </div>
    </>
  );
}

export default Product;