import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Interceptor to handle 401 Unauthorized responses
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      if(window.location.pathname!=="/landingpage"){      
        console.error('Unauthorized! Redirecting to login...');
        window.location.href="/landingpage";  
      }
    }
    return Promise.reject(error);
  }
);

export const axiosImage = axios.create({
  baseURL: "",
  headers: {
Accept: "image/png"  },
});
export const axiosFormData =axios.create({
  baseURL:"",

     headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  },

})
