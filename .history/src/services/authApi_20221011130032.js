import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});
const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const signUp = async ({ email, password, authType }) => {
  const paramType = authType === 'signin' ? 'signInWithPassword' : 'signUp';
  try {
    const res = await client.post(`${paramType}?key=${apiKey}`, {
      email,
      password,
    });
   const {idToken} res.data;
  } catch (e) {
    throw e;
  }
};

const signIn = () => {};

export { signIn, signOut };
