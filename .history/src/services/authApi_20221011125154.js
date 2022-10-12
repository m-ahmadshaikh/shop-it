import axios from 'axios';
import { getFetch, postFetch } from '../lib/fetch';

const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:',
});

const signIn = () => {
  client.get('');
};

const signOut = () => {
  postFetch();
};

export default client;
