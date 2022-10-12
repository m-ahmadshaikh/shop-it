import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});
const apiKey = 'AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q';
const authenticate = async ({ email, password, authType }) => {
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

    const { idToken } = res.data;
    return idToken;
  } catch (error) {
    let message = error.response.data.error.message;
    if (message === 'EMAIL_NOT_FOUND:') {
      message = 'Email doesnot exist! Please sign up!';
    } else if (message === 'INVALID_PASSWORD') {
      message = 'The password is incorrect!';
    } else if (message === 'USER_DISABLED') {
      message = 'You are disabled by the administrator';
    } else if (message === 'EMAIL_EXISTS') {
      message = 'This email already exists,Sign in please!';
    } else if (message === 'OPERATION_NOT_ALLOWED') {
      message = 'Sign in is disabled';
    }
    throw new Error(message);
  }
};

export default authenticate;
