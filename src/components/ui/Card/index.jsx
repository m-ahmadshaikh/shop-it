import React from 'react';
import classes from './Card.module.css';
function Card(props) {
  return <div {...props} className={`${classes.card} ${props.className}`} />;
}

export default Card;
