import * as React from "react";
import { View, Image, Text } from "react-native";
import { Input } from "../../components/Input/Index";
import ButtonField from "../../components/Bottom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useFormik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { PayloadType } from "../../types/global";
export const Login = () => {
  const { signIn, err} = useContext(AuthContext);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: () => formik.values,
  });
  const handlerSignIn = async() => {
   await signIn(formik.values)
   .then((response)=> {
    if(response.accessToken){
      navigation.navigate("Home")
    }
   })
  };
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
            value={formik.values.email}
            onChangeText={(value) => formik.setFieldValue("email", value)}
          />
          <Text style={styles.err}>{err}</Text>
          <Input
            placeholder="Digite Sua Senha"
            value={formik.values.password}
            onChangeText={(value) => formik.setFieldValue("password", value)}
          />

          <ButtonField onPress={handlerSignIn}>Acessar</ButtonField>
        </View>
      </View>
    </View>
  );
};
