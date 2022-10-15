import * as actionTypes from '../actionTypes';

export const initialAuthState = {
  loading: false,
  error: null,
  token: null,
  userID: null,
};

const setLocally = (token, userID) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userID', userID);
};

const unSetLocally = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userID');
};

const authReducer = (state = initialAuthState, { payload, type }) => {
  switch (type) {
    case actionTypes.AUTH_LOADING:
      return { ...state, loading: true, error: null };
    case actionTypes.AUTH_SUCCESS:
      setLocally(payload.token, payload.userID);
      return {
        ...payload
        loading: false,
        error: null,
      };

    case actionTypes.AUTH_ERROR:
      return { ...state, error: payload.error, loading: false };

    case actionTypes.AUTH_LOGOUT:
      unSetLocally();

      return {
        ...state,
        token: null,
        userID: null,
      };

    default:
      return state;
  }
};

export default authReducer;
