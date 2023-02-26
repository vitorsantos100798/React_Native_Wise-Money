import { createStackNavigator } from "@react-navigation/stack";
import { NavigateContainer } from "..";
import { Home } from "../../screens/home";
import { Login } from "../../screens/login";

export const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigateContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigateContainer>
  );
};
