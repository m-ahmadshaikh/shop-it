import axios from 'axios';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});
const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const signUp = ({ email, password }) => {
  client.post(`signUp?key=${apiKey}`, { email, password });
};

const signIn = () => {};

export { signIn, signOut };
