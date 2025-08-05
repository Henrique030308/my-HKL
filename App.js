import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Home from './src/Components/Home';


export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logos}>
        <Image>
          {/* source={require('./assets/logo.png')} */}
        </Image>
      </View>
      <View style={styles.caixabotao} onPress={() => navigation.navigate('Home')}>
        <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobotao}>
          Já tenho uma conta
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textobotao}>
          Criar conta
        </Text>
        </TouchableOpacity>
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
  logos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#005',
  },
  caixabotao: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 300,
    width: '100%',
    height: '100%',
  },
  botao: {
    backgroundColor: '#FBB800',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textobotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});