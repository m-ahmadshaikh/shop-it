import axios from 'axios';
const databaseClient = axios.create({
  baseURL: 'https://shop-it-58f9a-default-rtdb.firebaseio.com',
});
const checkout = async (data) => {
  try {
    const res = await client.post('/orders.json', data);
    return res.data;
  } catch (error) {
    let message = error.response.data.error;
    throw new Error(message);
  }
};

export { checkout };
export default databaseClient;
