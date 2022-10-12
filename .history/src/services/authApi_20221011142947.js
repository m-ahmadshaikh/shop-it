import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
const apiKey = 'AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q';
const authenticate = async ({ email, password, authType }) => {
  console.log(email, password);
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  console.log(
    `https://identitytoolkit.googleapis.com/v1/accounts:${paramType}?key=${apiKey}`
  );
  const res = await client.post(`v1/accounts:$${paramType}?key=${apiKey}`, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const { idToken } = res.data;
  console.log(res.data);
  return idToken;
};

export default authenticate;
