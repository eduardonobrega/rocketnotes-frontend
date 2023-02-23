import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-1t0q.onrender.com',
});
