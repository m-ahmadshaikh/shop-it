import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ui/ProductCard';
import { products } from '../Home';

function Product() {
  const params = useParams();
  const productElement = products
    .filter((p) => p.id === params.id)
    .map((p) => <ProductItem key={p.id} product={p} />);
  return <div>{productElement}</div>;
}

export default Product;
