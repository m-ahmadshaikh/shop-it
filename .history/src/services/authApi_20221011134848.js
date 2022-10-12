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
  const paramType = authType === 'signin?' ? 'signInWithPassword?' : 'signUp';
  const res = await client.post(`${paramType}?key=${apiKey}`, {
    email,
    password,
  });
  const { idToken } = res.data;
  return idToken;
};

export default authenticate;
