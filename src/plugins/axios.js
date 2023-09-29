import axios from "axios";
import TokenService from "../service/TokenService";
import router from "../router/index";

export const baseURL = "http://api.chay-chay.uz/api/";

export const http = axios.create({
  baseURL: baseURL,
});

function setConfiguration(provider) {
  provider.interceptors.request.use(
    (config) => {
      let token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      config.headers["Accept"] = "application/json";
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => Promise.reject(error)
  );
  provider.interceptors.response.use(
    (res) => res.data,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        router
          .push({ name: "home" })
          .then(() => {})
          .catch(() => {
            if (error.response.status === 401) {
              this.errorNotification("Token is expired");
            }
          });
      } else if (error.response && error.response.status === 403) {
        router.push({ path: "/403" }).then();
      }
      return Promise.reject(error);
    }
  );
}
setConfiguration(http);

export default http;
