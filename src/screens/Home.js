<<<<<<< HEAD
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
=======
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";
import Ondinha from "../../assets/img/ondinha.png"
import Sesc from '../../assets/img/cafeSesc.png';
import Senac from '../../assets/img/cafeSenac.png';
>>>>>>> 2b345c3c2f438e3d3813faf5d4cbe6e65a3478c2

export default function Home() {
  return (
    <View>
      <Header />
      <View style={styles.cima}>
        <Text style={styles.titulo}>SEU SALDO:</Text>
<<<<<<< HEAD
        <Text style={styles.valor}>R$00,00</Text>
=======
        <Text style={styles.valor}>R$0,00</Text>
>>>>>>> 2b345c3c2f438e3d3813faf5d4cbe6e65a3478c2
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.transferir}>TRANSFERIR</Text>
        </TouchableOpacity>
<<<<<<< HEAD
      </View>
      <View style={styles.baixo}></View>
=======
        <Image source={Ondinha} style={styles.ondinha}/>
      </View>
      <View style={styles.baixo}>
        <TouchableOpacity>
          <Image source={Sesc} style={styles.cafe}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Senac} style={styles.cafe}/>
        </TouchableOpacity>
      </View>
>>>>>>> 2b345c3c2f438e3d3813faf5d4cbe6e65a3478c2
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
<<<<<<< HEAD
    paddingTop: 15,
=======
    paddingTop: 40,
>>>>>>> 2b345c3c2f438e3d3813faf5d4cbe6e65a3478c2
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
<<<<<<< HEAD

  baixo: {
    height: "50%",
    backgroundColor: "#095593",
  },
=======
  ondinha: {
    marginTop: 30,
  },

  baixo: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
    backgroundColor: "#095593",
  },
  cafe:{
    width: 280,
    resizeMode: 'contain',
    marginVertical: 15,
  }
>>>>>>> 2b345c3c2f438e3d3813faf5d4cbe6e65a3478c2
});
