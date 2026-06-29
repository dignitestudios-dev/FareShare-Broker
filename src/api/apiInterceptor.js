import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.faresharellc.com",
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

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

      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);

export default api;
