import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_CLIENT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to handle 401 Unauthorized responses
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // Handle 401 error (e.g., redirect to login page or refresh token)
      console.error('Unauthorized! Redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
