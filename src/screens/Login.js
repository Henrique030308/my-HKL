import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import Divisor from "../../assets/img/ou.png";
import Google from "../../assets/img/iconGoogle.png";
import Facebook from "../../assets/img/iconFacebook.png";
import Telefone from "../../assets/img/telefone.png";

export default function Cadastro({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={styles.titulo}>LOGIN</Text>
      </View>
      <View style={styles.caixabotao}>
        <Text style={styles.cadastro}>E-mail</Text>
        <TextInput
          placeholder="******@gmail.com"
          style={styles.input}
          keyboardType="text"
        />
        <Text style={styles.cadastro}>Senha</Text>
        <TextInput
          placeholder="******"
          style={styles.input}
          keyboardType="text"
        />
        <Text style={styles.texto}>Não lembra a senha?</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.login}>ENTRAR</Text>
        </TouchableOpacity>
        <Image source={Divisor} style={{ marginTop: 30, marginBottom: 30 }} />
        <TouchableOpacity style={styles.outros}>
          <Image source={Google} style={{ marginLeft: 15 }} />
          <Text style={styles.meios}>Entrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outros}>
          <Image source={Facebook} style={{ marginLeft: 15 }} />
          <Text style={styles.meios}>Entrar com o Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outros}>
          <Image source={Telefone} style={{ marginLeft: 15 }} />
          <Text style={styles.meios}>Entrar com o Telefone</Text>
        </TouchableOpacity>
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
    alignSelf: "start",
    color: "#fbb800",
    fontSize: 16,
    marginLeft: 30,
  },
  outros: {
    flexDirection: "row",
    width: 350,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    borderWidth: 3,
    backgroundColor: "#fbe8ba",
    borderColor: "#fab802",
    marginTop: 15,
  },
  meios: {
    fontSize: 23,
    marginLeft: 10,
  },
});
