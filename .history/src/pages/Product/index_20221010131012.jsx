import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ui/ProductCard';
import products from '../../data/products';
import classes from './';
function Product() {
  const params = useParams();
  const productElement = products
    .filter((p) => p.id === params.id.toString())
    .map((p) => (
      <ProductItem className={classes.card} key={p.id} product={p} />
    ));
  return <div className="main">{productElement}</div>;
}

export default Product;
