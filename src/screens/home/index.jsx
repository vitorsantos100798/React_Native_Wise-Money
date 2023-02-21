import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./styles";
import { Box } from "../../components/Box";
import { BoxOne } from "../../utils/text";
import { InnerBoxRow } from "../../components/InnerBoxRow";
export const Home = () => {
  return (
    <SafeAreaView>
      <Box
        height={56}
        width={380}
        backgroundColor={"#F5F5F5"}
        textHeader={"Resultados"}
      >
        <View style={styles.container}>
          <InnerBoxRow
          textMoney={'R$ 1.500,00'}
          description={'Total Depositado'}
          pathImage={true}
          />
          <View
          style={styles.pipe}
          ></View>
          <InnerBoxRow
          textMoney={'R$ 1.000,00'}
          description={'Total Investido'}
          pathImage={false}
          />
        </View>
      </Box>

      <Box
       height={56}
       width={380}
       backgroundColor={"#F5F5F5"}
      >
        
      </Box>



    </SafeAreaView>
  );
};
