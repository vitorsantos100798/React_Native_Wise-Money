import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export const InnerBoxTwo = ({ pathImage, TextOne, Value }) => {
  const moneyred = require("../../assets/home/moneyredicon.png");
  const alert = require("../../assets/home/alert.png");
  return (
    <View style={styles.containerFather}>
      <View style={styles.container}>
        <Image style={styles.image} source={pathImage ? moneyred : alert} />
        <View style={styles.containerView}>
          <Text>{TextOne}</Text>
          <Text style={styles.text}>{Value}</Text>
        </View>
      </View>
    </View>
  );
};
