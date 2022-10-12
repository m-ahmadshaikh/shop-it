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
    const message = error.response.data.error.message;
    if (message === 'EMAIL_NOT_FOUND:') {
      throw new Error('Email doesnot exist! Please sign up!');
    }
  }
};

export default authenticate;
