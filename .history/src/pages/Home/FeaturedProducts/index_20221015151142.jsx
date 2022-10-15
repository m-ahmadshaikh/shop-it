import React, { useContext, useEffect } from 'react';

import Product from '../../../components/ui/ProductCard';
import getProducts from '../../../context/actions/product';
import { globalContext } from '../../../context/Provider';
import classes from './FeaturedProducts.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Card } from '../../../components/ui';
function FeaturedProducts() {
  const { productState, productDispatch } = useContext(globalContext);
  const { loading, products } = productState;
  useEffect(() => {
    getProducts()(productDispatch);
  }, []);

  return (
    <>
      <Card>
        <h1>
          <Skeleton width={140} height={140} />
        </h1>
        <h3 className="item-title">
          <Skeleton count={4} />
        </h3>

        <Skeleton height={48} count={2} className="skeleton" />
      </Card>
    </>
  );

  const productElements = products.map((product) => (
    <Product className={classes.card} key={product.id} product={product} />
  ));
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Featured Products</h1>
      <div className={classes.products}> {productElements}</div>
    </div>
  );
}

export default FeaturedProducts;
