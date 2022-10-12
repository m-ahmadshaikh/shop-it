import axios from 'axios';
import { getFetch, postFetch } from '../lib/fetch';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});
const apiKey = 'AIzaSyC8VI5Q1XlNAUiEDbfBlFWtbHWWy86nopE';
const signIn = () => {
  client.post(`signUp?key=${apiKey}`);
};

const signOut = () => {
  postFetch();
};

export { signIn, signOut };
