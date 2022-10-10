import React from 'react';
import { products } from '..';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const productElements = products.map((product) => (
    <div key={product.id}>
      <img src={product.imgUrl} alt="" />
      <h3>{product.name}</h3>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <button> Buy Now</button>
    </div>
  ));
  return (
    <div className={classes.products}>
      <h1>Featured Products</h1>
      {productElements}
    </div>
  );
}

export default FeaturedProducts;
