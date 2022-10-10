import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
const imageList = [
  {
    id: 0,
    url: 'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1536584754829-12214d404f32.jpeg?alt=media&token=1ef366cf-dccd-49a7-90eb-c7f1fd2e2463',
  },

  {
    id: 1,
    url: 'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1516820827855-3ea1bd6f79ea.jpeg?alt=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53',
  },
];
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
