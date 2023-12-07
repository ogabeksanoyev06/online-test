import axios from "axios";
import TokenService from "../service/TokenService";

const baseURL = "https://api.exam-test.uz/api/";
const http = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    switch (error.response.status) {
      case 401:
        break;
    }
    return Promise.reject(error);
  }
);

export default http;
