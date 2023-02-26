import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import { Box } from "../../components/Box";
import { InnerBoxthree } from "../../components/InerBoxThree";
import { InnerBoxRow } from "../../components/InnerBoxRow";
export const Home = () => {
  return (
    <SafeAreaView>
      <Box
        height={56}
        width={380}
        backgroundColor={"#d3d3d3"}
        textHeader={"Resultados"}
      >
        <View style={styles.container}>
          <InnerBoxRow
            textMoney={"R$ 1.500,00"}
            description={"Total Depositado"}
            pathImage={true}
          />
          <View style={styles.pipe}></View>
          <InnerBoxRow
            textMoney={"R$ 1.000,00"}
            description={"Total Investido"}
            pathImage={false}
          />
        </View>
      </Box>

      <Box height={76} width={380} backgroundColor={"#d3d3d3"}>
        <View style={styles.containerBoxTwo}>
          <InnerBoxthree ImageBox={"clock"} />
          <View style={styles.pipeTwo}></View>
          <InnerBoxthree ImageBox={"money"} />
          <View style={styles.pipeTwo}></View>
          <InnerBoxthree ImageBox={"handmoney"} />
        </View>
      </Box>
    </SafeAreaView>
  );
};
