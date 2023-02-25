import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/screens/login";
import { Home } from "./src/screens/home";
import AuthProvider from "./src/context/auth";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}
        options={{
          title:'',
          headerTransparent:true,
          headerShown:false
        }}
        />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
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
