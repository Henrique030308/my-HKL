import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "../screens/Home";
import Compras from "../screens/Compras";
import Transferencia from "../screens/Transferencia";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#FBB800" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#005594",
          tabBarLabel: "Início",
          tabBarIcon: () => (
            <Image
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              source={
                focused
                  ? require("../../assets/img/inicioCheio.png")
                  : require("../../assets/img/inicio.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Compras}
        options={{
          tabBarActiveTintColor: "#005594",
          tabBarLabel: "Carrinho",
          tabBarIcon: () => (
            <Image
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              source={
                focused
                  ? require("../../assets/img/carrinhoCheio.png")
                  : require("../../assets/img/carrinho.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Local"
        component={Transferencia}
        options={{
          tabBarActiveTintColor: "#005594",
          tabBarLabel: "Saldo",
          tabBarIcon: () => (
            <Image
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              source={
                focused
                  ? require("../../assets/img/transferenciaCheio.png")
                  : require("../../assets/img/transferencia.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Perfil}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "compras",
        }}
      />

      <Tab.Screen
        name="Informações"
        component={Transferencia}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "informações",
                    tabBarIcon: () => (
            <Image
              style={{ width: size ?? 24, height: size ?? 24, tintColor: color }}
              source={
                focused
                  ? require("../../assets/img/perfilCheio.png")
                  : require("../../assets/img/perfil.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
