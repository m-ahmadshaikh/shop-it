import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
const apiKey = 'AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q';
const authenticate = async ({ email, password, authType }) => {
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  const res = await client
    .post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEDALu2-PdCHiIREUygLYreCdLhjZ4s2Q',
      JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      })
    )
    .catch((e) => {
      console.log(e.response.data.message);
    });
  const { idToken } = res.data;
  return idToken;
};

export default authenticate;
