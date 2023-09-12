import { Text } from "react-native";
import { View } from "../Themed";
import { styles } from "./styles";
import FilmCard from "../FilmCard";

const Carrossel = () => {
  const arrayFilm = [1, 2]
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>NEW MOVIES</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <View style={styles.carousel}>
        {
          arrayFilm.map((item) => {
            return (
              <View key={item}>
                <FilmCard />
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

export default Carrossel;