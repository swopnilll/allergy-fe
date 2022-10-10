import axios from "axios";
import { BASE_URL } from "../constant/urlContant";

const setInterceptors = (accessToken: string) => {
  axios.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${accessToken}`;
    return config;
  });
};

export const getAllAllergiesForUser = async (
  userId: number,
  accessToken: string
) => {
  setInterceptors(accessToken);
  
  const response = await axios.get(`${BASE_URL}/users/${userId}`);

  return response;
};
