import { GETTING_PRODUCTS } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getProducts = () => {
  async (dispatch) => {
    dispatch({ type: GETTING_PRODUCTS });
    const res = await databaseClient.get('/products.json');
    const products = Object.values(res.data)[0];
    console.log(products);
  };
};

export default getProducts;
