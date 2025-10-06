import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TabNavigator") }>
        <Text style={styles.buttonText}>Ir para abas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#005594",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});