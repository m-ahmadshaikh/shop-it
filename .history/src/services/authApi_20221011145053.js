import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
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
    console.log(res.status);
    const { idToken } = res.data;
    return idToken;
  } catch (e) {
    console.log(e.response.data.error.message);
    throw new Error(e.response.data.error.message);
  }
};

export default authenticate;
