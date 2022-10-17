import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiKey = import.meta.env.VITE_API_KEY;
