import { GETTING_PRODUCTS, SET_PRODUCTS } from '../actionTypes';

const initialProductState = {
  loading: false,
  products: null,
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_PRODUCTS:
      return { ...state, loading: true };
    case SET_PRODUCTS:
      console.log(payload);
      return { loading: false, products: payload.products };

    default:
      return state;
  }
};

export { initialProductState, productReducer };
