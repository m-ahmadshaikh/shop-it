import databaseClient from '../../services/databaseApi';
import { FETCHING_ORDERS, SET_ORDERS } from '../actionTypes';

const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_ORDERS });
    const res = await databaseClient.get('/orders.json');
    const orders = res.data[0];
    dispatch({ type: SET_ORDERS, payload: { orders } });
  };
};

export default getOrders;
