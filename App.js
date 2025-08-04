import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logos}>
        <Text>
          logos
        </Text>
      </View>
      <View style={styles.caixabotao}>
        <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobotao}>
          Já tenho uma conta
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
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
});