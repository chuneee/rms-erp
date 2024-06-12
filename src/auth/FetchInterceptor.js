// src/auth/FetchInterceptor.js
import axios from 'axios';
import { API_BASE_URL } from 'constants/ApiConstant';
import { signOutSuccess } from 'store/slices/authSlice';
import store from '../store';
import { AUTH_TOKEN } from 'constants/AuthConstant';
import { notification } from 'antd';

const unauthorizedCode = [400, 401, 403];

const service = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
});

// Config
const TOKEN_PAYLOAD_KEY = 'authorization';

// API Request interceptor
service.interceptors.request.use(config => {
  const jwtToken = localStorage.getItem(AUTH_TOKEN) || null;
  
  if (jwtToken) {
    config.headers[TOKEN_PAYLOAD_KEY] = `Bearer ${jwtToken}`;
  }

  return config;
}, error => {
  notification.error({
    message: 'Request Error',
    description: error.message,
  });
  return Promise.reject(error);
});

// API response interceptor
service.interceptors.response.use(response => {
  return response.data;
}, error => {
  let notificationParam = {
    message: 'Error',
    description: error.response?.data?.message || 'Something went wrong',
  };

  // Remove token and redirect 
  if (unauthorizedCode.includes(error.response?.status)) {
    notificationParam.message = 'Authentication Failed';
    notificationParam.description = 'Please login again';
    localStorage.removeItem(AUTH_TOKEN);

    store.dispatch(signOutSuccess());
  }

  notification.error(notificationParam);

  return Promise.reject(error);
});

export default service;
