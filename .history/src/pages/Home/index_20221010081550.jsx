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
// eslint-disable-next-line no-unused-vars
const categories = [
  {
    id: uuidv4(),
    name: 'laptops',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1481487196290-c152efe083f5.jpeg?alt=media&token=fb7f6f13-2e3d-48d7-8163-18a0b58fb19d',
  },
  {
    id: uuidv4(),
    name: 'accessories',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1574944985070-8f3ebc6b79d2.png?alt=media&token=bf54998a-ca4a-4ab9-ba86-6d4f78bc7453',
  },
  {
    id: uuidv4(),
    name: 'sound',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1546435770-a3e426bf472b.jpeg?alt=media&token=82a4af83-ec6b-48c2-b0ab-ccee6681d8bc',
  },
  {
    id: uuidv4(),
    name: 'phones',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1574944985070-8f3ebc6b79d2.png?alt=media&token=bf54998a-ca4a-4ab9-ba86-6d4f78bc7453',
  },
];
const products = [{ id: uuidv4, name: 'Beats' }];
function Home() {
  return (
    <div>
      <CarouselSlider images={carouselImageList} />
    </div>
  );
}

export default Home;
