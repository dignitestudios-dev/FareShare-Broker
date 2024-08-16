import axios from "axios";
import Cookies from "js-cookie";

// axios instance
const api = axios.create({
  baseURL: "https://backend.faresharellc.com",
  // timeout: 15000,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
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
    // console.log(response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
