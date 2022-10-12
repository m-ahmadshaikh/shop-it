import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Backdrop, Button, Card } from '../../components/ui';
import products from '../../data/products';
import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const productElement = products
    .filter((p) => p.id === params.id.toString())
    .map((product) => (
      <Card key={product.id} className={classes.card}>
        <img src={product.imgUrl} alt="" />
        <h1>{product.name}</h1>
        <p>Price: PKR {product.price}</p>
        <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
        <Button onClick={null}>Order Now</Button>
      </Card>
    ));
  return (
    <>
      <Backdrop onClick={setOpenModal} />
      <div className={classes.modal}></div>

      <div className={classes.main}>{productElement}</div>
    </>
  );
}

export default Product;
