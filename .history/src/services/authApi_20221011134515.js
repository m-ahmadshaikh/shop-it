import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const authenticate = async ({ email, password, authType }) => {
  const paramType = authType === 'signin?' ? 'signInWithPassword?' : 'signUp';
  const res = await client.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      email,
      password,
    }
  );
  const { idToken } = res.data;
  return idToken;
};

export default authenticate;
