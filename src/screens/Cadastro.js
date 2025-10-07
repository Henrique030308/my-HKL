import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from "react";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logos}>
      </View>
      <View>
        <Text style={styles.titulo}>
          LOGIN
        </Text>
      </View>
      <View style={styles.caixabotao} >
<TouchableOpacity style={styles.botao} >
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
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logos: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#005',
  },
  titulo: {
    color: '#fbb800',
    fontSize: 70,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  caixabotao: {
    flex: 4,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  botao: {
    backgroundColor: '#FBE9BA',
    width: 250,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderColor: '#fbb800',
    borderWidth: 2,
  },
  textobotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});