import Cookies from "js-cookie";
import axios from "axios";

// axios instance
const api = axios.create({
  baseURL: "https://backend.faresharellc.com",
  timeout: 2000,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjYwNDQxYmRlZDExMjc3YWU3NTU5YiIsImVtYWlsIjoiaHV6YWlmYS5hbGlAbGF1bmNoYm94LnBrIiwiaWF0IjoxNzIzMjA0OTY2LCJleHAiOjE3MzA5ODA5NjZ9.RfAmF9uDS-h_iVTXj75glrD0XFmEmp_6-ebVgi8kn6I`,
  },
});

// Request interceptor to handle API calls with tokens
api.interceptors.request.use(
  (config) => {
    // List of API endpoints that need a token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
