import databaseClient from '../../services/databaseApi';
import { FETCHING_ORDERS, SET_ORDERS } from '../actionTypes';

const getOrders = () => {
  async (dispatch) => {
    dispatch({ type: FETCHING_ORDERS });
    const res = await databaseClient.get('/orders.json');
    const orders = res.data;
    console.log(orders);
    // dispatch({ type: SET_ORDERS, payload: { orders } });
  };
};

export default getOrders;
