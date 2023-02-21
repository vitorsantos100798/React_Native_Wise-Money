import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: "https://wisemoneyapp.com.br",
  headers: {
    "api-key": "9cIIZus4TWe2g0CTRy9iJEbO1gvmjco6anP93RsoiyKTWErJfa",
  },
});

axios.interceptors.request.use(
  async (config) => {
    const acessToken = await AsyncStorage.getItem("@wise:Token");

    api.defaults.headers.common.authorization = `${acessToken}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
