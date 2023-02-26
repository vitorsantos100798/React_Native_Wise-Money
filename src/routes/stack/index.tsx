import { createStackNavigator } from "@react-navigation/stack";
import { NavigateContainer } from "..";
import { Home } from "../../screens/home";
import { Login } from "../../screens/login";
import { HeaderHome } from "../../components/HeaderHome";
export const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <NavigateContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "",
          headerTintColor:'white',
          headerBackground: () => <HeaderHome/>
        }}
        
        />
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
