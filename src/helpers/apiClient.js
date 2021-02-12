/* eslint-disable no-undef */
import axios from 'axios';
import { getCookie } from './helperFunctions';

const apiClient = axios.create({
  baseURL: 'api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'X-CSRFToken': getCookie('wellness_csrftoken'),
  },
});

export default apiClient;
