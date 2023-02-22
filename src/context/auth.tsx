import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback } from "react";
import api from "../services/api";
import { signInService } from "../services/signIn";
import { useState } from "react";
import { AuthProviderType } from "../types/global";
export const AuthContext = createContext({} as AuthProviderType);
const AuthProvider = ({ children }) => {
  const [err, setErr] = useState("")

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await signInService({ email, password });
      const { acessToken, expire } = response;
      api.defaults.headers.common.authorization = `${acessToken}`;

      const token = await AsyncStorage.setItem("@wise:Token", JSON.stringify(acessToken));
      const expireDate = await AsyncStorage.setItem(
        "@wise:expireToken",
         JSON.stringify(expire)
      );
      return {
        token,
        expireDate,
      };
    } catch (error) {
      return setErr(error.message)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn,err}}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
