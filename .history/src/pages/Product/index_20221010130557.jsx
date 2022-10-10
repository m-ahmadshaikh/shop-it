import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ui/ProductCard';
import products from '../../data/products';

function Product() {
  const params = useParams();
  const productElement = products
    .filter((p) => p.id === params.id.toString())
    .map((p) => <ProductItem key={p.id} product={p} />);
  console.log(products);
  console.log(params.id);
  return <div>{productElement}</div>;
}

export default Product;
