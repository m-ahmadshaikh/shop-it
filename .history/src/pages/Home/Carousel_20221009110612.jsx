import React from 'react';
import classes from './Carousel.module.css';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MyCarousel() {
  return <div className={classes.carousel}>Carousel</div>;
}

export default MyCarousel;
