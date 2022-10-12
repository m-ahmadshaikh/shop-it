import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

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
    if (error.response) {
      //do something
    } else if (error.request) {
      //do something else
    } else if (error.message) {
      //do something other than the other two
    }
    console.log(error.response.data.error.message);
  }
};

export default authenticate;
