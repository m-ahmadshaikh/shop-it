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
// eslint-disable-next-line no-unused-vars
const products = [
  {
    id: uuidv4(),
    name: 'Macbook Air 2018',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/macbook-air-2020-review-apple-gets-this-air-just-right_e1z9.960.jpg?alt=media&token=d0f6e262-0a30-4489-b79a-adefb938bb44',
    category: 'laptops',
    price: 160000,
    isAvailable: true,
  },
  {
    id: uuidv4(),
    name: 'Lenovo Yoga Book',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1527434009951-75a8f7558468.jpeg?alt=media&token=0b5ee7f3-5132-4877-8c05-f8939e847c34',
    category: 'laptops',
    price: 90000,
    isAvailable: true,
  },
  {
    id: uuidv4(),
    name: 'iPhone Sky Cover',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1541877590-a1885a0c5df0.jpeg?alt=media&token=fc1ef4dd-b096-4259-8a2a-8b4c4469dc42',
    category: 'accessories',
    price: 350,
    isAvailable: true,
  },
  {
    id: uuidv4(),
    name: 'Beats Solo 3 Wireless',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1487215078519-e21cc028cb29.jpeg?alt=media&token=5c17e671-bec5-4eca-9856-29df89ea37c9',
    category: 'sound',
    price: 35000,
    isAvailable: false,
  },
  {
    id: uuidv4(),
    name: 'Airpods Pro',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1574920162043-b872873f19c8.png?alt=media&token=99d35fef-ba02-4a06-a858-1ffefca58f25',
    category: 'sound',
    price: 35000,
    isAvailable: true,
  },
  {
    id: uuidv4(),
    name: 'iPhone 11',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/shop-it-ff797.appspot.com/o/photo-1584990451792-a664349412ab.jpeg?alt=media&token=78d6425a-d9fb-4304-97cb-a425a4af1543',
    category: 'phones',
    price: 160000,
    isAvailable: true,
  },
];
function Home() {
  return (
    <div>
      <CarouselSlider images={carouselImageList} />
    </div>
  );
}

export default Home;
