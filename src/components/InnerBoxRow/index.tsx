import * as React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { BoxOne } from "../../utils/text";

type InnerBoxType = {
  textMoney:string
  description:string 
  pathImage:string
}


export const InnerBoxRow = ({textMoney, description,pathImage}:InnerBoxType) => {
   const pathMoney = require("../../assets/home/money.png")
   const pathLadder = require("../../assets/home/ladder.png")
  return (
    <View>
      <View style={styles.containerInnerBox}>
        <Image
          style={styles.imageStyle}
          source={pathImage ? pathMoney: pathLadder}
        />
        <View>
          <Text style={styles.textValue}>
          {textMoney}
          </Text>
          <Text style={styles.textBottom}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};
