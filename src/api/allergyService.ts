import { protectedAxios } from "./axios";

export const getAllAllergiesForUser = async (userId: number) => {
  const response = await protectedAxios.get(`/users/${userId}`);

  return response;
};
