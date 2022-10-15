import {
  DELETE_ORDER,
  DELETE_ORDER_START,
  FETCHING_ORDERS,
  SET_ORDERS,
} from '../actionTypes';

const initialOrderState = {
  loading: false,
  deleteLoading: false,
  orders: null,
};

const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case FETCHING_ORDERS:
      return { ...state, loading: true, error: null };
    case SET_ORDERS:
      return { ...state, loading: false, orders: payload.orders };

    default:
      return state;
  }
};

export { initialOrderState, orderReducer };
