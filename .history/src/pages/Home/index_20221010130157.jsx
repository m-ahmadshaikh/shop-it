import React from 'react';
import CarouselSlider from '../../components/ui/Carousel';
import { v4 as uuidv4 } from 'uuid';
import FeaturedProducts from './FeaturedProducts';
const carouselImageList = [
  {
    id: uuidv4(),
    url: 'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1536584754829-12214d404f32.jpeg?alt=media&token=1ef366cf-dccd-49a7-90eb-c7f1fd2e2463',
  },

  {
    id: uuidv4(),
    url: 'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1516820827855-3ea1bd6f79ea.jpeg?alt=media&token=af7b2df1-70a5-40c1-938b-b045ae9e8c53',
  },
];
function Home() {
  return (
    <div>
      <CarouselSlider images={carouselImageList} />
      <FeaturedProducts />
    </div>
  );
}

export default Home;