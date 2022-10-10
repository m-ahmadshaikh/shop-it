import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './Category.module.css';
function Category() {
  const params = useParams();
  console.log(params);
  return <div className={classes.main}>category</div>;
}

export default Category;
