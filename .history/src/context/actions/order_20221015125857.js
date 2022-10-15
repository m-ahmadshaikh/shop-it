import databaseClient from '../../services/databaseApi';
import {
  DELETE_ORDER_START,
  FETCHING_ORDERS,
  SET_ORDERS,
} from '../actionTypes';

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
    dispatch({ type: DELETE_ORDER_START });
    await databaseClient.delete(`/orders/${id}.json`);
    const res = await databaseClient.get('/orders.json');
    const orders = res.data;
    dispatch({ type: SET_ORDERS, payload: { orders: orders ?? [] } });
  };
};

export { getOrders, deleteOrder };
