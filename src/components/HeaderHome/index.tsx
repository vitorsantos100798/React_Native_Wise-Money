import { Image, View } from "react-native";
import { styles } from "./styles";

export const HeaderHome = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/home/headerHome.png")}
        />
      </View>
    </>
  );
};
