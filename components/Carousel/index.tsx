import { Text } from "react-native";
import { View } from "../Themed";
import { styles } from "./styles";
import FilmCard from "../FilmCard";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Link } from "expo-router";

const Carousel = () => {
  const arrayFilm = [1, 2, 3]
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>NEW MOVIES</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          arrayFilm.map((item) => {
            return (
              <Link key={item} href={'/two'}>
                <TouchableOpacity>
                  <FilmCard />
                </TouchableOpacity>
              </Link>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Carousel;