import React from 'react';
import classes from './Categories.module.css';
import { categories } from '.../Home/';
function Categories() {
  const categoryElements = categories;
  return (
    <div className={classes.main}>
      <h1>Categories</h1>
    </div>
  );
}

export default Categories;
