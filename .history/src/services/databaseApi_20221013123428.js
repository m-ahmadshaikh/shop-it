import axios from 'axios';
const client = axios.create({
  baseURL: 'https://shop-it-58f9a-default-rtdb.firebaseio.com',
});
const checkout = async (data) => {
  try {
    const res = await client.post('/orders.json', data);
    return res.data;
  } catch (error) {
    console.log(error);
    let message = error.error;
    throw new Error(message);
  }
};

export { checkout };
