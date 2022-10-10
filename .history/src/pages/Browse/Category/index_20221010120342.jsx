import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import { products } from '../../Home';
import classes from './Category.module.css';
function Category() {
  const params = useParams();
  const productElements = products
    .filter((p) => p.category === params.id)
    .map((p) => (
      <Card className={classes.card} key={p.id}>
        <img src={p.imgUrl} alt="" />
        <h1>{p.name}</h1>
        <p>{'>'}</p>
      </Card>
    ));
  console.log(params.id);
  return <div className={classes.main}>{productElements}</div>;
}

export default Category;
