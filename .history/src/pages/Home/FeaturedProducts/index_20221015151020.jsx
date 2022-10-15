import React, { useContext, useEffect } from 'react';

import Product from '../../../components/ui/ProductCard';
import getProducts from '../../../context/actions/product';
import { globalContext } from '../../../context/Provider';
import classes from './FeaturedProducts.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function FeaturedProducts() {
  const { productState, productDispatch } = useContext(globalContext);
  const { loading, products } = productState;
  useEffect(() => {
    getProducts()(productDispatch);
  }, []);

  return (
    <>
      <section>
        <article className="item">
          <div className="item-img">
            <Skeleton width={140} height={140} />
          </div>
          <h3 className="item-title">
            <Skeleton count={4} />
          </h3>
          <div className="item-info">
            <Skeleton width={160} height={20} />
            <Skeleton width={30} height={20} />
            <Skeleton width={22} height={22} circle={true} />
          </div>
          <Skeleton height={48} count={2} className="skeleton" />
        </article>
      </section>
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
