import React from 'react';
import { products } from '..';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const productElements = products.map((product) => (
    <Card key={product.id}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button>Buy Now</Button>
    </Card>
  ));

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.products}> {productElements}</div>
    </div>
  );
}

export default FeaturedProducts;
