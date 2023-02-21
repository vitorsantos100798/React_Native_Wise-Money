import { View, Image, Text } from "react-native";

import { Input } from "../../components/Input/Index";
import ButtonField from "../../components/Bottom";
import styles from "./styles";

export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../../assets/login/logo.png")} />
      </View>
      <View style={styles.boxLogin}>
        <View style={styles.boxtextlogin}>
          <Text style={styles.styleText}>Login</Text>
        </View>

        <View style={styles.containerBetween}>
          <Input
          placeholder="E-mail"
          />
          <Input
          placeholder="Digite Sua Senha"
          />
          <ButtonField>Acessar</ButtonField>
        </View>
      </View>
    </View>
  );
};
