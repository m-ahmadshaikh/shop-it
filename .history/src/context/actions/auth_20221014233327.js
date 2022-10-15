import { apiKey, client } from '../../services/authApi';
import {
  AUTH_ERROR,
  AUTH_LOADING,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
} from '../actionTypes';
export const authenticate =
  ({ email, password, authType }) =>
  async (dispatch) => {
    dispatch({ type: AUTH_LOADING });
    try {
      const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
      const res = await client.post(
        `accounts:${paramType}?key=${apiKey}`,
        JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        })
      );

      const { expiresIn, idToken, localId } = res.data;
      // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          token: idToken,
          userID: localId,
        },
      });
      // setTimeout(() => {
      //   dispatch({ type: AUTH_LOGOUT });
      // }, +expirationDate * 1000);
    } catch (error) {
      let message = error.response.data.error.message;
      if (message === 'EMAIL_NOT_FOUND') {
        message = 'Email doesnot exist! Please sign up!';
      } else if (message === 'INVALID_PASSWORD') {
        message = 'The password is incorrect!';
      } else if (message === 'USER_DISABLED') {
        message = 'You are disabled by the administrator';
      } else if (message === 'EMAIL_EXISTS') {
        message = 'This email already exists. Sign in, please!';
      } else if (message === 'OPERATION_NOT_ALLOWED') {
        message = 'Sign in is disabled';
      } else if (message.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
        message = 'You have tried enough... Come back later!';
      }
      dispatch({
        type: AUTH_ERROR,
        payload: {
          error: message,
        },
      });
    }
  };
