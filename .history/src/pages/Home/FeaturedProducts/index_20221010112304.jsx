import React from 'react';
import { products } from '..';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import Product from '../../../components/ui/Product';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const productElements = products.map((product) => (
    <Product key={product.id}></Product>
  ));

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.products}> {productElements}</div>
    </div>
  );
}

export default FeaturedProducts;
