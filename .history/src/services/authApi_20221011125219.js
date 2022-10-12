import axios from 'axios';
import { getFetch, postFetch } from '../lib/fetch';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});
const apiKey = 
const signIn = () => {
  client.post('signUp?key=');
};

const signOut = () => {
  postFetch();
};

export default client;
