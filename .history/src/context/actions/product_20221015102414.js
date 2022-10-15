import { GETTING_PRODUCTS } from '../actionTypes';
import database
const getProducts = () => {
  (dispatch) => {
    dispatch({ type: GETTING_PRODUCTS });
    database;
  };
};

export default getProducts;
