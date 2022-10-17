import axios from 'axios';
const databaseClient = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_BASE_URL,
});

export default databaseClient;
