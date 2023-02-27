import { View, Image, Text } from "react-native";
import { styles } from "./styles";

export const InnerBoxBottom = ({
  TextOne,
  Value,
  pathImage,
  ColorTextBottom,
}) => {
  const calendar = require("../../assets/home/calendar.png");
  const calendarBlue = require("../../assets/home/calendarblue.png");
  return (
    <View style={styles.conatiner}>
      <View style={styles.containerTwo}>
        <Image
          source={pathImage ? calendar : calendarBlue}
          style={styles.Image}
        />
        <Text style={styles.textone}>{TextOne} </Text>
      </View>
      <Text
        style={{
          fontSize: 25,
          marginRight:20,
          fontWeight: "bold",
          color: ColorTextBottom,
        }}
      >
        {Value}
      </Text>
    </View>
  );
};
