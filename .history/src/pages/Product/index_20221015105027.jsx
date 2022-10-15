import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Modal } from '../../components/ui';
import getProducts from '../../context/actions/product';
import { CHECK_AUTH_TIMEOUT } from '../../context/actionTypes';
import { globalContext } from '../../context/Provider';

import classes from './Product.module.css';
function Product() {
  const params = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [productDetails, setProductDetails] = useState({
    quantity: 0,
    totalPrice: 0,
  });
  const navigate = useNavigate();
  const { productState, authState, authDispatch, productDispatch } =
    useContext(globalContext);
  const { products } = productState;
  const orderNowHandler = () => {
    authDispatch({ type: CHECK_AUTH_TIMEOUT });
    // if (!authState.userID) {
    //   navigate('/login');
    //   return;
    // }
    // setOpenModal((prev) => !prev);
  };
  useEffect(() => {
    if (!products) {
      getProducts()(productDispatch);
    }
  }, []);
  if (productState.loading || !products) {
    return <p>loading...</p>;
  }

  const product = products.find((p) => p.id === params.id);
  const onCheckOut = () => {
    setOpenModal(false);
    navigate('/checkout', {
      state: {
        ...productDetails,
        name: product.name,
      },
    });
  };

  const onAdd = () => {
    setProductDetails((prev) => ({
      ...prev,
      quantity: +prev.quantity + 1,
      totalPrice: +prev.totalPrice + +product.price,
    }));
  };

  const onDelete = () => {
    setProductDetails((prev) => ({
      ...prev,
      quantity: +prev.quantity - 1,
      totalPrice: +prev.totalPrice - +product.price,
    }));
  };
  const cardElement = (
    <Card key={product.id} className={classes.card}>
      <img src={product.imgUrl} alt="" />
      <h1>{product.name}</h1>
      <p>Price: PKR {product.price}</p>
      <p>{product.isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      <Button onClick={orderNowHandler}>Order Now</Button>
    </Card>
  );

  const modalElement = (
    <Modal show={openModal} toggleShow={orderNowHandler}>
      <h3>{product.name}</h3>
      <p>Quantity: {productDetails.quantity}</p>
      <div className={classes.modal__btns}>
        <button
          disabled={productDetails.quantity < 1}
          onClick={onDelete}
          className={classes.btn}>
          -
        </button>
        <button
          disabled={productDetails.quantity >= 5}
          onClick={onAdd}
          className={classes.btn}>
          +
        </button>
      </div>
      <p>Total Price: PKR {productDetails.totalPrice}</p>
      <Button disabled={productDetails.quantity <= 0} onClick={onCheckOut}>
        Checkout
      </Button>
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
