import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

function Carousels() {
  const imageElements = imageList.map((img) => (
    <img key={img.id} src={img.url} alt="" />
  ));
  return (
    <div>
      <Carousel infiniteLoop autoPlay showArrows showThumbs={false}>
        {imageElements}
      </Carousel>
    </div>
  );
}

export default Carousels;
