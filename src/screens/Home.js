import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

export default function Home() {
  return (
    <View>
      <Header />
      <View style={styles.cima}>
        <Text style={styles.titulo}>SEU SALDO:</Text>
        <Text style={styles.valor}>R$00,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.transferir}>TRANSFERIR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.baixo}></View>
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
  cima: {
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  titulo: {
    color: "#fbb800",
    fontSize: 45,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 35,
    textDecorationLine: "underline",
  },
  valor: {
    fontSize: 40,
    color: "#095593",
    fontWeight: "semi-bold",
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
  transferir: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "bold",
  },

  baixo: {
    height: "50%",
    backgroundColor: "#095593",
  },
});
