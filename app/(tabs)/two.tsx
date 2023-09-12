import { StyleSheet, Image, Dimensions } from "react-native";

import { Text, View } from "../../components/Themed";
import { ImageDetail } from "../../components/ImageDetail";

const widthFull = Dimensions.get("window").width;
const heightFull = Dimensions.get("window").height;

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageDetail source="https://i.pinimg.com/originals/4b/56/7b/4b567b59155bf6fdb9984b0a5a0c53c9.jpg" />

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  containerImage: {
    width: "100%",
    backgroundColor: "red",
    height: 400,
    position: "relative",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
