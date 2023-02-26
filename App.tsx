import React from "react";
import "react-native-gesture-handler";
import { Routes } from "./src/routes/stack";
import AuthProvider from "./src/context/auth";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
