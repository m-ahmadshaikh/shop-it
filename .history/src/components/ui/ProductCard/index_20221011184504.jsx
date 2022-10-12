import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Card from '../Card';

function ProductItem(props) {
  const navigate = useNavigate();
  const { product } = props;
  return (
    <Card className={props.className}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}>
        {props.btnTxt}
      </Button>
    </Card>
  );
}

export default ProductItem;
