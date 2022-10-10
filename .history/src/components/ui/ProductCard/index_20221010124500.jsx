import React from 'react';
import Button from '../Button';
import Card from '../Card';

function Product(props) {
  const { product } = props;
  return (
    <Card className={props.className}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button>Buy Now</Button>
    </Card>
  );
}

export default Product;
