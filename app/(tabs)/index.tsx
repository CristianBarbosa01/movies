import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Carrossel from '../../components/Carrossel';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie</Text>
      <View>
        <Carrossel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
