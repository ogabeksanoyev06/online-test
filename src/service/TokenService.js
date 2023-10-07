const FRONT_TOKEN_KEY = "AuthorizationFront";
const FRONT_REFRESH_TOKEN_KEY = "RefreshFront";
const FRONT_TOKEN_EXPIRE = "TokenExpireFront";
const FRONT_TOKEN_CREATION_TIME = "CreationTime";

const TokenService = {
  getToken() {
    return localStorage.getItem(FRONT_TOKEN_KEY);
  },
  saveToken(token) {
    localStorage.setItem(FRONT_TOKEN_KEY, token);
  },
  saveRefreshToken(token) {
    localStorage.setItem(FRONT_REFRESH_TOKEN_KEY, token);
  },
  getRefreshToken() {
    return localStorage.getItem(FRONT_REFRESH_TOKEN_KEY);
  },
  saveTokenCreationTime(token) {
    localStorage.setItem(FRONT_TOKEN_CREATION_TIME, token);
  },
  getTokenCreationTime() {
    return parseInt(localStorage.getItem(FRONT_TOKEN_CREATION_TIME));
  },
  saveTokenExpireDate(expireTime) {
    localStorage.setItem(FRONT_TOKEN_EXPIRE, expireTime);
  },
  getTokenExpireDate() {
    return parseInt(localStorage.getItem(FRONT_TOKEN_EXPIRE));
  },
  removeToken() {
    localStorage.removeItem(FRONT_TOKEN_KEY);
    localStorage.clear();
  },
  removeRefreshToken() {
    localStorage.removeItem(FRONT_REFRESH_TOKEN_KEY);
  },
};

export default TokenService;
