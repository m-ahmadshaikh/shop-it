import { FETCHING_ORDERS } from '../actionTypes';

const getOrders = () => {
  (dispatch) => {
    dispatch({ type: FETCHING_ORDERS });
  };
};
