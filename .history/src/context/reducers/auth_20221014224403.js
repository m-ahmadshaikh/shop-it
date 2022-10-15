import * as actionTypes from '../actionTypes';

export const initialState = {
  loading: false,
  error: null,
  token: null,
  userID: null,
};

const authReducer = (state, { payload, type }) => {
  switch (type) {
    case actionTypes.AUTH_LOADING:
      break;
    case actionTypes.AUTH_SUCCESS:
      return { ...state };

    case actionTypes.AUTH_ERROR:

    case actionTypes.AUTH_LOGOUT:

    default:
      return state;
  }
};

export default authReducer;
