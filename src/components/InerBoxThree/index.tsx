import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const InnerBoxthree = ({ImageBox, Valor, TextBottomOne, TextBottomTwo}) => {
   const clock = require("../../assets/home/clock.png")
   const money = require("../../assets/home/moneyGreen.png")
   const handMoney = require("../../assets/home/handMoney.png")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>R$</Text>
      <Text style={styles.text}>{Valor}</Text>
      <Text style={styles.textBottom}>{TextBottomOne}</Text>
      <View style={styles.containerImage}>
        <Text style={styles.textBottom}>{TextBottomTwo}</Text>
       {ImageBox === "clock" ? 
      ( <Image source={clock} />):
       ImageBox === "money" ? 
       ( <Image source={money} />):
       ImageBox === "handmoney" ? 
       ( <Image source={handMoney} />): null
      }
      </View>
    </View>
  );
};
