import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const productElement = products.filter((p) => {
    return p.id === params.id.toString();
  });
  console.log(productsElement);

  return <div>{productElement}</div>;
}

export default Product;
