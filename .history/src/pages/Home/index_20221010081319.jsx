import React from 'react';
import CarouselSlider from '../../components/ui/Carousel';
import { v4 as uuidv4 } from 'uuid';
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
const categories = [
  { id: uuidv4(), name: 'laptops' },
  { id: uuidv4(), name: 'accessories' },
  { id: uuidv4(), name: 'sound' },
  { id: uuidv4(), name: 'phones' },
];
const products = [{ id: uuidv4, name: {} }];
function Home() {
  return (
    <div>
      <CarouselSlider images={carouselImageList} />
    </div>
  );
}

export default Home;
