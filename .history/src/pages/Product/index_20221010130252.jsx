import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';

function Product() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  console.log(products);
  console.log(params.id);
  return <div>product</div>;
}

export default Product;
