import { GETTING_PRODUCTS, SET_PRODUCTS } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getProducts = () => {
  return async (dispatch) => {
    dispatch({ type: GETTING_PRODUCTS });
    const res = await databaseClient.get('/products.json');
    const products = Object.values(res.data)[0];
    dispatch({ type: SET_PRODUCTS, payload: products });
  };
};

export default getProducts;
