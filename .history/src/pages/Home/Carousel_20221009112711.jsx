import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Carousels() {
  return (
    <div>
      <Carousel autoPlay interval="3000" transitionTime="3000" infiniteLoop>
        <div>
          <img
            ariaLabe
            src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1536584754829-12214d404f32.jpeg?alt=media&token=1ef366cf-dccd-49a7-90eb-c7f1fd2e2463"
            alt=""
          />
          <p className="legend">My Photo 1</p>
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1516820827855-3ea1bd6f79ea.jpeg?alt=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53"
            alt=""
          />
          <p className="legend">My Photo 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carousels;
