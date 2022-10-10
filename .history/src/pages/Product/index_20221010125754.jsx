import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  console.log(product);
  console.log(params.id);
  return <div>product</div>;
}

export default Product;
