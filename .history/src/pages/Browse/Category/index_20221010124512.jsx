import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../../components/ui/Card';
import { products } from '../../Home';
import classes from './Category.module.css';
function Category() {
  const params = useParams();
  const navigate = useNavigate();

  const productElements = products
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
