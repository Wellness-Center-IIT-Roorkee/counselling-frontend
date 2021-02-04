/* eslint-disable no-undef */
import axios from 'axios';

const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || '/v1',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default apiClient;
