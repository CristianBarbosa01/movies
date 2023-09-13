import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Carousel from '../../components/Carousel';
import { ScrollView } from 'react-native-gesture-handler';

export default function TabOneScreen() {

  const carousel = [1, 2, 3];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Movies</Text>
      </View>
      <View style={styles.carousel}>
        <ScrollView>
          {
            carousel.map((item) => {
              return (
                <View key={item}>
                  <Carousel />
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    padding: 10,
    height: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: 20
  },
  carousel: {
    height: '92%',
  }
});
