import * as React from "react";
import { View, Image, Text } from "react-native";
import { Input } from "../../components/Input/Index";
import ButtonField from "../../components/Bottom";
import styles from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useFormik } from "formik";


export const Login = () => {
  const { signIn,err } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: () => formik.values,
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../../assets/login/logo.png")} />
      </View>
      <View style={styles.boxLogin}>
        <View style={styles.boxtextlogin}>
          <Text style={styles.styleText}>Login</Text>
          <Text style={styles.err}>{err}</Text>
        </View>

        <View style={styles.containerBetween}>
          <Input
            placeholder="E-mail"
            value={formik.values.email}
            onChangeText={(value) => formik.setFieldValue("email", value)}
          />
          <Input
            placeholder="Digite Sua Senha"
            value={formik.values.password}
            onChangeText={(value) => formik.setFieldValue("password", value)}
          />

          <ButtonField
          onPress={() => signIn(formik.values)}
          >Acessar</ButtonField>
        </View>
      </View>
    </View>
  );
};
