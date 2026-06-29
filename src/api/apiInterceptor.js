import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://backend.faresharellc.com",
  timeout: 30000,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Get latest token every request
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    // Debug (Remove in production)
    console.log("Request URL:", config.url);
    console.log("Token:", token);

    return config;
  },
  (error) => Promise.reject(error),
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.log("Network Error");
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      console.log("Unauthorized");

      localStorage.removeItem("token");

      // Redirect to login page
      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);

export default api;
