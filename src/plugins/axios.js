import axios from "axios";
import TokenService from "../service/TokenService";
import router from "../router/index";

const baseURL = "https://api.chay-chay.uz/api/";

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
        handleTokenExpiry();
        break;
      case 403:
        router.push({ path: "/403" });
        break;
    }
    return Promise.reject(error);
  }
);

function handleTokenExpiry() {
  localStorage.clear();
  router.push({ name: "home" }).catch((err) => {
    console.error("Router Error:", err);
  });
}

export default http;
