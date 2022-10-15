import {
  ORDER_FAIL,
  ORDER_RESET,
  ORDER_START,
  ORDER_SUCCESS,
} from '../actionTypes';

const initialCheckoutState = {
  loading: false,
  error: null,
  success: false,
};

const checkoutReducer = (state, { type, payload }) => {
  switch (type) {
    case ORDER_START:
      return { ...state, loading: true, error: null };
    case ORDER_SUCCESS:
      return { ...state, loading: false, success: true };
    case ORDER_FAIL:
      return { ...state, error: payload.error, loading: false };
    case ORDER_RESET:
      return { ...state, success: false };
    default:
      break;
  }
};

export { initialCheckoutState, checkoutReducer };
