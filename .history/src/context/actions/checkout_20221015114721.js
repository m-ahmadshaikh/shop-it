import databaseClient from '../../services/databaseApi';
import { ORDER_FAIL, ORDER_START, ORDER_SUCCESS } from '../actionTypes';

const setOrder = (formData) => {
  return async (dispatch) => {
    dispatch({ type: ORDER_START });
    try {
      await databaseClient.post('/orders.json', formData);
      dispatch({ type: ORDER_SUCCESS });
    } catch (error) {
      let message = error.response.data.error;
      dispatch({ type: ORDER_FAIL, payload: { error: message } });
    }
  };
};

const checkout = async (data) => {};

export { checkout };
