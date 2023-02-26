import { NavigationContainer } from "@react-navigation/native";

export const NavigateContainer = ({ children }) => {
  return (
    <>
      <NavigationContainer>{children}</NavigationContainer>
    </>
  );
};
