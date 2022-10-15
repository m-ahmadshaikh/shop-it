import { GETTING_CATEGORIES } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getCategories = () => {
  return async (dispatch) => {
    dispatch({ type: GETTING_CATEGORIES });
    const res = await databaseClient.get('/categories.json');
    const categories = Object.values(res.data);
    console.log(categories);
  };
};

export { getCategories };
