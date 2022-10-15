import * as actionTypes from '../actionTypes';

export const initialAuthState = {
  loading: false,
  error: null,
  token: localStorage.getItem('token') || null,
  userID: localStorage.getItem('userID' || null),
};

const setLocally = (token, userID, expirationDate) => {
  localStorage.setItem('token', token);
  localStorage.setItem('expirationDate', expirationDate);

  localStorage.setItem('userID', userID);
};

const unSetLocally = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userID');
  localStorage.removeItem('expirationDate');
};

const authReducer = (state = initialAuthState, { payload, type }) => {
  switch (type) {
    case actionTypes.AUTH_LOADING:
      return { ...state, loading: true, error: null };
    case actionTypes.AUTH_SUCCESS:
      setLocally(payload.token, payload.userID, payload.expirationDate);
      return {
        userID: payload.userID,
        token: payload.token,
        loading: false,
        error: null,
      };

    case actionTypes.AUTH_ERROR:
      return { ...state, error: payload.error, loading: false };

    case actionTypes.AUTH_LOGOUT:
      console.log('logout');
      unSetLocally();

      return {
        ...state,
        token: null,
        userID: null,
      };

    case actionTypes.CHECK_AUTH_TIMEOUT:
      checkAuthTimeout(state);
      break;
    default:
      return state;
  }
};

const checkAuthTimeout = async (state) => {
  const expirationDate = await localStorage.getItem('expirationDate');
  const expirationTime = new Date(expirationDate).getTime();
  const timeRemaining = expirationTime - Date.now();
  if (timeRemaining < 5) {
    unSetLocally();
    return { ...state, token: null, userID: null };
  }
  return { ...state };
};
export default authReducer;
