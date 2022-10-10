import React from 'react';
import { products } from '..';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const productElements = products.map((product) => (
    <div className={classes.card} key={product.id}>
      <img className={classes.card__img} src={product.imgUrl} alt="" />
      <h3 className={classes.card__title}>{product.name}</h3>
      <p className={classes.card__subtitle}>Price: PKR {product.price}</p>
      <p className={classes.card__subtitle}>
        {product.isAvailable ? 'In Stock' : 'Out of Stock'}
      </p>
      <button className={classes.card__btn}> Buy Now</button>
    </div>
  ));
  return (
    <div className={classes.products}>
      <h1 className={classes.title}>Featured Products</h1>
      {productElements}
    </div>
  );
}

export default FeaturedProducts;
