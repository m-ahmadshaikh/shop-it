import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Modal } from '../../components/ui';

import products from '../../data/products';
import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    quantity: 0,
    totalPrice: 0,
  });
  const navigate = useNavigate();

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const onCheckOut = () => {
    setOpenModal(false);
    navigate('/checkout');
  };

  const product = products.find((p) => p.id === params.id);

  const onAdd = () => {
    if (productDetails.quantity <= 5) {
      setProductDetails((prev) => ({
        ...prev,
        quantity: +prev.quanitity + 1,
        totalPrice: +prev.totalPrice + +product.price,
      }));
    }
  };

  const onDelete = () => {
    if (productDetails.quantity > 1) {
      setProductDetails((prev) => ({
        ...prev,
        quantity: +prev.quanitity - 1,
        totalPrice: +prev.totalPrice - +product.price,
      }));
    }
  };
  const cardElement = (
    <Card key={product.id} className={classes.card}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button onClick={toggleModal}>Order Now</Button>
    </Card>
  );

  const modalElement = (
    <Modal show={openModal} toggleShow={toggleModal}>
      <h3>{product.name}</h3>
      <p>Quantity: {productDetails.quantity}</p>
      <div className={classes.modal__btns}>
        <button onClick={onDelete} className={classes.btn}>
          -
        </button>
        <button onClick={onAdd} className={classes.btn}>
          +
        </button>
      </div>
      <p>Total Price: PKR {productDetails.totalPrice}</p>
      <Button onClick={onCheckOut}>Checkout</Button>
    </Modal>
  );
  return (
    <>
      <div className={classes.main}>
        {modalElement}
        {cardElement}
      </div>
    </>
  );
}

export default Product;
