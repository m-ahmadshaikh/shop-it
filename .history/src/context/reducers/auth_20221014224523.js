import * as actionTypes from '../actionTypes';

export const initialState = {
  loading: false,
  error: null,
  token: null,
  userID: null,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case actionTypes.AUTH_LOADING:
      break;
    case actionTypes.AUTH_SUCCESS:
      return {
        userID: payload.userID,
        token: payload.token,
        loading: false,
        error: null,
      };

    case actionTypes.AUTH_ERROR:

    case actionTypes.AUTH_LOGOUT:

    default:
      return state;
  }
};

export default authReducer;
