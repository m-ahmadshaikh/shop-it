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
    `https://shop-it-58f9a-default-rtdb.firebaseio.com/user.json`,
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
