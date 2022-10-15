import { GETTING_PRODUCTS } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getProducts = () => {
  (dispatch) => {
    dispatch({ type: GETTING_PRODUCTS });
    databaseClient.get();
  };
};

export default getProducts;
