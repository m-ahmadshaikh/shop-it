import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Backdrop, Button, Card } from '../../components/ui';
import Modal from '../../components/ui/Modal/Modal';
import products from '../../data/products';
import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const productElement = products
    .filter((p) => p.id === params.id.toString())
    .map((product) => (
      <Card key={product.id} className={classes.card}>
        <img src={product.imgUrl} alt="" />
        <h1>{product.name}</h1>
        <p>Price: PKR {product.price}</p>
        <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
        <Button onClick={toggleModal}>Order Now</Button>
      </Card>
    ));
  return (
    <>
      <div className={classes.main}>
        <Modal open={openModal} onClick={setOpenModal} />
        {productElement}
      </div>
    </>
  );
}

export default Product;
