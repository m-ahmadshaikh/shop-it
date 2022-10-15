import axios from 'axios';
const client = axios.create({
  baseURL: 'https://shop-it-58f9a-default-rtdb.firebaseio.com',
});
const checkout = (data) => {
  client.post('/orders.json');
};

export { checkout };
