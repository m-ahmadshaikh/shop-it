import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const productElement = products.filter((p) => {
    return p.id === params.id.toString();
  });
  console.log(products);
  console.log(params.id);
  return <div>product</div>;
}

export default Product;
