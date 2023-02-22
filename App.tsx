import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/screens/login";
import { Home } from "./src/screens/home";
import AuthProvider from "./src/context/auth";
export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <Login />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
