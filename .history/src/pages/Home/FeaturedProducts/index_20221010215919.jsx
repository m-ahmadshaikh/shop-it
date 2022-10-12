import React from 'react';

import Product from '../../../components/ui/ProductCard';
import products from '../../../data/products';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const productElements = products.map((product) => (
    <Product className={classes.card} key={product.id} product={product} />
  ));
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.products}> {productElements}</div>
    </div>
  );
}

export default FeaturedProducts;
