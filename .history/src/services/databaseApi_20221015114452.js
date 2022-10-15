import axios from 'axios';
const databaseClient = axios.create({
  baseURL: 'https://shop-it-58f9a-default-rtdb.firebaseio.com',
});

export default databaseClient;
