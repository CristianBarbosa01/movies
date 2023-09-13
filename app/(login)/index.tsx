import { Link } from "expo-router";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <View style={{height: 100, width: 100, backgroundColor: 'blue'}}>
      <Link href={'/(tabs)'}>Entrou aqui</Link>
    </View>
  )
}

export default Login;