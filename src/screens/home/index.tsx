import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import { Box } from "../../components/Box";
import { InnerBoxthree } from "../../components/InerBoxThree";
import { InnerBoxRow } from "../../components/InnerBoxRow";
import { InnerBoxTwo } from "../../components/innerBoxTwo";
import { InnerBoxBottom } from "../../components/InnerBoxBottom";
export const Home = () => {
  return (
    <SafeAreaView>
      <Box
        height={56}
        width={380}
        backgroundColor={"#dedede"}
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

      <Box height={76} width={380} backgroundColor={"#dedede"}>
        <View style={styles.containerBoxTwo}>
          <InnerBoxthree
            ImageBox={"clock"}
            Valor={"1.500,00"}
            TextBottomOne={"Total a "}
            TextBottomTwo={"Receber"}
          />
          <View style={styles.pipeTwo}></View>
          <InnerBoxthree
            ImageBox={"money"}
            Valor={"100,00"}
            TextBottomOne={"Total de "}
            TextBottomTwo={"CashBack"}
          />
          <View style={styles.pipeTwo}></View>
          <InnerBoxthree
            ImageBox={"handmoney"}
            Valor={"100,00"}
            TextBottomOne={"Total"}
            TextBottomTwo={"Recebido"}
          />
        </View>
      </Box>

      <Box height={76} width={380} backgroundColor={"#dedede"}>
        <InnerBoxTwo
          pathImage={true}
          TextOne={"Total de Saques"}
          Value={"R$ 0,00"}
        />
        <View
          style={{
            borderColor: "#d3d3d3",
            borderWidth: 1,
            marginBottom: 5,
          }}
        ></View>
        <InnerBoxTwo
          TextOne={"Total de Saques"}
          Value={"R$ 0,00"}
          pathImage={null}
        />
      </Box>

      <View style={styles.shadow}>
        <Box
          height={74}
          width={340}
          backgroundColor={"#dedede"}
          textHeader="Inadimplência - Carteira  individual"
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <InnerBoxBottom
              TextOne={"30 dias"}
              Value={"1,44%"}
              pathImage={true}
              ColorTextBottom={"#00C8B4"}
            />
            <View style={styles.pipeTwo}></View>
            <InnerBoxBottom
              TextOne={"60 dias"}
              Value={"1,44%"}
              pathImage={true}
              ColorTextBottom={"#00C8B4"}
            />
            <View style={styles.pipeTwo}></View>
            <InnerBoxBottom
              TextOne={"90 dias"}
              Value={"1,44%"}
              pathImage={true}
              ColorTextBottom={"#00C8B4"}
            />
          </View>
        </Box>
      </View>
      <View style={styles.shadow}>
        <Box
          height={74}
          width={340}
          backgroundColor={"#dedede"}
          textHeader="Inadimplência - Carteira Wise"
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <InnerBoxBottom
              TextOne={"30 dias"}
              Value={"1,44%"}
              pathImage={false}
              ColorTextBottom={"#4066E2"}
            />
            <View style={styles.pipeTwo}></View>
            <InnerBoxBottom
              TextOne={"60 dias"}
              Value={"0,96%"}
              pathImage={false}
              ColorTextBottom={"#4066E2"}
            />
            <View style={styles.pipeTwo}></View>
            <InnerBoxBottom
              TextOne={"90 dias"}
              Value={"0,67%"}
              pathImage={false}
              ColorTextBottom={"#4066E2"}
            />
          </View>
        </Box>
      </View>
    </SafeAreaView>
  );
};
