import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import {router} from 'expo-router';


export default function App() {

function Login() {
    router.navigate("/src/Components/Login.js");
  }

  return (
    <View style={styles.container}>
      <View>
        <Button title="inicioddddddsdd " onProgress={Login}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005594',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FBB800',
  },
});