import databaseClient from '../../services/databaseApi';
import { DELETE_ORDER, FETCHING_ORDERS, SET_ORDERS } from '../actionTypes';

const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_ORDERS });
    const res = await databaseClient.get('/orders.json');
    const orders = res.data;
    dispatch({ type: SET_ORDERS, payload: { orders } });
  };
};

const deleteOrder = (id) => {
  return async (dispatch) => {
    await databaseClient.delete(`/orders/${id}.json`);
    dispatch({ type: DELETE_ORDER });
  };
};

export { getOrders, deleteOrder };
