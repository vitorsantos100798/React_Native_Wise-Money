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
      <Text style={{marginLeft:15, color: "#00000099", fontSize: 22, fontWeight: "bold", marginBottom:8 }}>
        {textHeader}
      </Text>
      <View
        style={{
          marginLeft:15,
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
