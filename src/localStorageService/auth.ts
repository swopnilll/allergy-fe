import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../utils/localStorage";
import { isEmpty as isStringEmpty } from "../utils/string";

/**
 * Method to set access token.
 *
 * @param {String} accessToken
 * @returns {Promise}
 */
export const setAccessToken = (accessToken: string) => {
  return setValueInLocalStorage("accessToken", accessToken);
};

/**
 * Method to set refresh token.
 *
 * @param {String} refreshToken
 * @returns {Promise}
 */
export const setRefreshToken = (refreshToken: string) => {
  return setValueInLocalStorage("refreshToken", refreshToken);
};

/**
 * Method to get access token.
 *
 * @returns {String}
 */
export const getAccessToken = () => {
  return getValueFromLocalStorage("accessToken");
};

/**
 * Method to get refresh token.
 *
 * @returns {String}
 */
export const getRefreshToken = () => {
  return getValueFromLocalStorage("refreshToken");
};

/**
 * Method to validate if user is logged in.
 */
export const validateAuthentication = () => {
  const accessToken = getAccessToken();

  return !isStringEmpty(accessToken);
};
