import axios from "axios";
import TokenService from "./TokenService";

window.axios = axios;
export let baseURL = "https://api.exam-test.uz/api/";
export default {
  install: function (Vue) {
    axios.defaults.baseURL = baseURL;
    Vue.prototype.$http = {
      send(requestType, apiRoute, params = {}, data = null) {
        this.setToken();
        return new Promise((resolve, reject) => {
          axios[requestType](baseURL + apiRoute, params ? params : [], data)
            .then((res) => {
              resolve(res.data);
            })
            .catch((err) => {
              this.errorHandler(err);
              reject(err);
            });
        });
      },
      get(apiRoute, params = null) {
        return this.send("get", apiRoute, params);
      },
      post(apiRoute, data = null) {
        return this.send("post", apiRoute, data);
      },
      put(apiRoute, data = null) {
        return this.send("put", apiRoute, data);
      },
      patch(apiRoute, data = null) {
        return this.send("patch", apiRoute, data);
      },
      delete(apiRoute, params = null) {
        return this.send("delete", apiRoute, params);
      },
      errorHandler(err) {
        console.log(err);
      },
      setToken() {
        axios.defaults.headers.common = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: TokenService.getToken()
            ? "Bearer " + TokenService.getToken()
            : "",
        };
      },
    };
  },
};
