import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, } from "react-native";
import React from "react";
import Header from "../components/Header";
import Telefone from "../../assets/img/telefone.png";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.titulo}>CADASTRO</Text>
      </View>
      <View style={styles.caixabotao}>
        <Text style={styles.cadastro}>Nome Completo</Text>
        <TextInput
        style={styles.input}
        keyboardType="text"
        />
        <Text style={styles.cadastro}>E-mail</Text>
        <TextInput
        style={styles.input}
        keyboardType="text"
        />
        <Text style={styles.cadastro}>Senha</Text>
        <TextInput
        style={styles.input}
        keyboardType="text"
        />
        <Text style={styles.cadastro}>Confirmar Senha</Text>
        <TextInput
        style={styles.input}
        keyboardType="text"
        />
        <View style={styles.telefone}>
          <Image source={Telefone} style={{ width: 20, height: 20, marginTop: 15}} />
          <TextInput
          style={styles.inputTelefone}
          placeholder="Telefone"
          keyboardType="number"
          />
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.login}>CRIAR CONTA</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>Já tem uma conta? <TouchableOpacity style={styles.touchable}><Text style={styles.textoDois}>Entre aqui</Text></TouchableOpacity></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#fbb800",
    fontSize: 45,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 35,
    textDecorationLine: "underline",
  },
  caixabotao: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "left",
    backgroundColor: "#ffffff",
  },
  cadastro: {
    color: "#000000",
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 15,
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  input: {
    width: 360,
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#fbe8ba",
    borderColor: "#fab802",
  },
  telefone: {
    flexDirection: "row",
    paddingTop: 30,
    width: 350,
    borderBottomWidth: 0.5,
    borderColor: "#000000",
  },
  inputTelefone: {
    fontSize: 18,
    color: "#000000",
  },
  botao: {
    marginTop: 40,
    backgroundColor: "#fbb800",
    height: 50,
    width: 350,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },
  texto: {
    paddingTop: 25,
    fontSize: 16,
  },
  touchable: {
    marginTop: 8
  },
  textoDois: {
    color: "#fbb800",
  },
});
