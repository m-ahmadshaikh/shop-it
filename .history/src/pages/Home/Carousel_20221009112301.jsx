import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carousels() {
  return (
    <div>
      <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
        <div>
          <img
            src="	https://firebasestorage.googleapis.com/v0/b/shop-i…=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53"
            alt=""
          />
          <p className="legend">My Photo 1</p>
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-i…=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53"
            alt=""
          />
          <p className="legend">My Photo 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousels;
