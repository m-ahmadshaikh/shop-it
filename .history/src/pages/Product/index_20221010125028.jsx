import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const productElement = products.filter((p) => p.id === params.id.toString());

  console.log(productElement);
  console.log(params.id);
  return <div>{productElement}</div>;
}

export default Product;
