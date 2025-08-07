import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Login from './src/pages/login';


export default function App() {

  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005594',
    alignItems: 'center',
    justifyContent: 'center',
  },
});