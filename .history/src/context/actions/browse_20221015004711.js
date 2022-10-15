import { GETTING_CATEGORIES } from '../actionTypes';
import databaseClient from '../../services/databaseApi';
const getCategories = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_CATEGORIES });
    databaseClient.
  };
};
