/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-import-module-exports */
import axios, { AxiosRequestConfig } from 'axios';

export default {
  apiAddress:
    process.env.REACT_APP_BACKEND_URL || 'https://afternoon-fortress-36104.herokuapp.com/api/v1'
  // apiAddress: 'http://localhost:8000/api/v1'
};

export const TIME_OUT = 10 * 1000;

const alphaApi = axios.create({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
});

alphaApi.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) {
    console.error('Cannot find header');
    return config;
  }
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';

  return config;
});

export { alphaApi };
