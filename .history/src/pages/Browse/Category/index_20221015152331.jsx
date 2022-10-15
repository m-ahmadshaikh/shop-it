import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import getProducts from '../../../context/actions/product';
import { globalContext } from '../../../context/Provider';
import classes from './Category.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const { productState, productDispatch } = useContext(globalContext);

  useEffect(() => {
    if (!productState.products) {
      getProducts()(productDispatch);
    }
  }, []);

  if (productState.loading || !productState.products) {
    return (
      <div className={classes.main}>
        <Skeleton count={10} width="500px" height="100px" />
      </div>
    );
  }

  const productElements = productState.products
    .filter((p) => p.category === params.id)
    .map((p) => (
      <Card
        onClick={() => {
          navigate(`/product/${p.id}`);
        }}
        className={classes.card}
        key={p.id}>
        <img src={p.imgUrl} alt="" />
        <h1>{p.name}</h1>
        <p>{'>'}</p>
      </Card>
    ));
  return <div className={classes.main}>{productElements}</div>;
}

export default Category;
