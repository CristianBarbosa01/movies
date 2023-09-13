import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    fontSize: 14,
    color: '#fff'
  },
  viewAll: {
     color: Colors.light.tint 
  },
});