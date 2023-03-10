import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback } from "react";
import api from "../services/api";
import { signInService } from "../services/signIn";
import { useState } from "react";
import { AuthProviderType } from "../types/global";
export const AuthContext = createContext({} as AuthProviderType);
const AuthProvider = ({ children }) => {
  const [err, setErr] = useState(" ");

  const signIn = useCallback(async ({ email, password }) => {
    const response = await signInService({ identifier: email, password }).catch(
      (error) => {
        return setErr(error.response.data.message);
      }
    );

    const { accessToken, expire } = response;
    AsyncStorage.setItem("@token", JSON.stringify(accessToken));
    AsyncStorage.setItem("@expireToken", JSON.stringify(expire))
    return {
      accessToken,
      expire
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, err }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
