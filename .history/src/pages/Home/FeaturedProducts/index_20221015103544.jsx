import React, { useContext, useEffect } from 'react';

import Product from '../../../components/ui/ProductCard';
import getProducts from '../../../context/actions/product';
import { globalContext } from '../../../context/Provider';
import classes from './FeaturedProducts.module.css';
function FeaturedProducts() {
  const { productState, productDispatch } = useContext(globalContext);
  const { loading, products } = productState;
  useEffect(() => {
    getProducts()(productDispatch);
  }, []);

  if (loading) {
    return <p>loading</p>;
  }

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
