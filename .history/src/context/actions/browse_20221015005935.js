import { GETTING_CATEGORIES, SET_CATEGORIES } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getCategories = () => {
  return async (dispatch) => {
    dispatch({ type: GETTING_CATEGORIES });
    const res = await databaseClient.get('/categories.json');
    const categories = Object.values(res.data[0]);
    dispatch({ type: SET_CATEGORIES, payload: { categories } });
  };
};

export { getCategories };
