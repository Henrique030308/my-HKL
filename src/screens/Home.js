import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";
import Ondinha from "../../assets/img/ondinha.png"
import Sesc from '../../assets/img/cafeSesc.png';
import Senac from '../../assets/img/cafeSenac.png';

export default function Home() {
  return (
    <View>
      <Header />
      <View style={styles.cima}>
        <Text style={styles.titulo}>SEU SALDO:</Text>
        <Text style={styles.valor}>R$0,00</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate("TabNavigator")}
        >
          <Text style={styles.transferir}>TRANSFERIR</Text>
        </TouchableOpacity>
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
    paddingTop: 40,
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

  // ...existing code...

  ondinha: {
    marginTop: 30,
    width: '100%', // Ocupa 100% da largura da tela
    height: 50, // Altura fixa para a onda
    resizeMode: 'stretch', // Estica a imagem para preencher o espaço
  },

// ...existing code...


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
});
