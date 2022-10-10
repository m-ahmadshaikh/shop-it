import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
function Carousels() {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showArrows showThumbs={false}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1536584754829-12214d404f32.jpeg?alt=media&token=1ef366cf-dccd-49a7-90eb-c7f1fd2e2463"
          alt=""
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1516820827855-3ea1bd6f79ea.jpeg?alt=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53"
          alt=""
        />
      </Carousel>
    </div>
  );
}

export default Carousels;
