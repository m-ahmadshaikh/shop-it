import React from 'react';
import classes from './Categories.module.css';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../../components/ui/Card';
import { useNavigate } from 'react-router-dom';

export const categories = [
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
function Categories() {
  const navigate = useNavigate();

  const categoryElements = categories.map((category) => (
    <Card
      onClick={() => {
        navigate(`/browse/${category.name}`);
      }}
      className={classes.card}
      key={category.id}>
      <img src={category.imgUrl} alt="" />
      <h1>{category.name[0].toUpperCase() + category.name.slice(1)}</h1>
    </Card>
  ));
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Categories</h1>
      {categoryElements}
    </div>
  );
}

export default Categories;
