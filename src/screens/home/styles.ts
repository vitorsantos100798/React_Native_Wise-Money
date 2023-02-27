import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  pipe: {
    borderWidth: 1,
    height: "80%",
    margin: 20,
    borderColor: "#d3d3d3",
  },
  pipeTwo: {
    borderWidth: 1,
    height: "80%",
    margin: 10,
    borderColor: "#d3d3d3",
  },
  containerBoxTwo: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  shadow: {
    width: "90%",
    height: 130,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: "white",
    
  },
});

export default styles;
