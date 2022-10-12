import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});
const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const signUp = async ({ email, password }) => {
  try {
    const res = await client.post(`signUp?key=${apiKey}`, { email, password });
    res.data;
  } catch (e) {
    throw e;
  }
};

const signIn = () => {};

export { signIn, signOut };
