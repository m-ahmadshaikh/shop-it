import { DELETE_ORDER, FETCHING_ORDERS, SET_ORDERS } from '../actionTypes';

const initialOrderState = {
  loading: false,
  orders: null,
};

const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCHING_ORDERS:
      return { ...state, loading: true, error: null };
    case SET_ORDERS:
      return { ...state, loading: false, orders: payload.orders };
    case DELETE_ORDER:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export { initialOrderState, orderReducer };
