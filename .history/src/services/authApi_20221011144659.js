import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});
const apiKey = 'AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q';
const authenticate = async ({ email, password, authType }) => {
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  const res = await client
    .post(
      `accounts:${paramType}?key=${apiKey}`,
      JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      })
    )
    .catch((e) => {
      console.log(e.response.data.error.message);
      throw new Error(e.response.data.error.message);
    });
  const { idToken } = res.data;
  return idToken;
};

export default authenticate;
