import { PayloadType } from "../types/global";
import api from "./api";

export const signInService = async ({ email, password }) => {
  const response = await api.post("/api/authorize/auth/test", {
    identifier: email,
    password,
  });

  const { acessToken, expire } = response.data;

  return {
    acessToken,
    expire,
  } as PayloadType;
};
