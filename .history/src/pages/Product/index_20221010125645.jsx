import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const productElement = products.filter((p) => {
    console.log(p.id, params.id.toString());
    return p.id === params.id.toString();
  });
  console.log(productElement);

  return <div>product</div>;
}

export default Product;
