import axios from "axios";
import { PayloadType } from "../types/global";
import api from "./api";

export const signInService = async ({ identifier, password }) => {
  const response = await axios.post(
    "https://wisemoneyapp.com.br/api/authorize/auth/test",
    {
      identifier,
      password,
    },
    {
      headers: {
        "api-key": "9cIIZus4TWe2g0CTRy9iJEbO1gvmjco6anP93RsoiyKTWErJfa",
      },
    }
  );
  return response.data;
};
