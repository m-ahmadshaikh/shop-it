import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
const apiKey = 'AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q';
const authenticate = async ({ email, password, authType }) => {
  console.log(email, password);
  const paramType = authType === 'signin?' ? 'signInWithPassword?' : 'signUp';
  const res = await client.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const { idToken } = res.data;
  console.log(res.data);
  return idToken;
};

export default authenticate;
