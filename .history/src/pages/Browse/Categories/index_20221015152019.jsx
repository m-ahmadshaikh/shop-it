import React, { useContext, useEffect } from 'react';
import classes from './Categories.module.css';
import Card from '../../../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { globalContext } from '../../../context/Provider';
import { getCategories } from '../../../context/actions/browse';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Categories() {
  const navigate = useNavigate();
  const { browseState, browseDispatch } = useContext(globalContext);

  useEffect(() => {
    getCategories()(browseDispatch);
  }, []);
  return <Skeleton width="100px" height="100px" />;

  const categoryElements = browseState.categories.map((category) => (
    <Card
      onClick={() => {
        navigate(`/browse/${category.name}`);
      }}
      className={classes.card}
      key={category.id}>
      <img src={category.imgUrl} alt="" />
      <h1>{category.name[0].toUpperCase() + category.name.slice(1)}</h1>
    </Card>
  ));
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Categories</h1>
      {categoryElements}
    </div>
  );
}

export default Categories;