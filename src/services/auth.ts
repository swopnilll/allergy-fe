import axios from "axios";
import { BASE_URL } from "../constant/urlContant";

export const login = async (payload: any) => {
  const response = await axios.post(`${BASE_URL}/login`, payload);

  return response;
};

export const register = async (payload: any) => {
  const response = await axios.post(`${BASE_URL}/register`, payload);

  return response;
}
