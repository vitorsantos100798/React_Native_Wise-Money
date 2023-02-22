import * as React from "react";
import { View, Text } from "react-native";
import { typeBox } from "../../types/global";
export const Box = ({
  width,
  height,
  backgroundColor,
  textHeader,
  children,

}: typeBox) => {
  return (
    <>
      <Text style={{ color: "#00000099", fontSize: 22, fontWeight: "bold", marginBottom:8 }}>
        {textHeader}
      </Text>
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          borderRadius: 10,
        }}
      >
        {children}
      </View>
    </>
  );
};
