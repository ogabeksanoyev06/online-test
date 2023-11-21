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
  isTokenExpired(token) {
    try {
      const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Decode the token payload
      const expirationTime = tokenPayload.exp * 1000; // Convert the UNIX timestamp to milliseconds
      return Date.now() >= expirationTime;
    } catch (error) {
      return true;
    }
  },
  isRefreshTokenExpired(refreshToken) {
    try {
      const refreshTokenPayload = JSON.parse(atob(refreshToken.split(".")[1])); // Decode the token payload
      const refreshExpirationTime = refreshTokenPayload.exp * 1000; // Convert the UNIX timestamp to milliseconds
      return Date.now() >= refreshExpirationTime;
    } catch (error) {
      return true;
    }
  },
};

export default TokenService;
