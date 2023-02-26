import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const InnerBoxthree = ({ImageBox}) => {
   const clock = require("../../assets/home/clock.png")
   const money = require("../../assets/home/moneyGreen.png")
   const handMoney = require("../../assets/home/handMoney.png")
  return (
    <View style={styles.container}>
      <Text style={styles.text}>R$</Text>
      <Text style={styles.text}>1.500,00</Text>
      <Text style={styles.textBottom}>Total a</Text>
      <View style={styles.containerImage}>
        <Text style={styles.textBottom}>Receber</Text>
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
