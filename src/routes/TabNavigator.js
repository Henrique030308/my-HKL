import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import Home from "../screens/Home";
import CafeSenac from "../screens/CafeSenac";
import CafeSesc from "../screens/CafeSesc";
import Compras from "../screens/Compras";
import Transferencia from "../screens/Transferencia";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "Início",
          tabBarIcon: () => (
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/img/home.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Local"
        component={CafeSenac}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "Senac",
          tabBarIcon: () => (
            <Image
              style={{ width: 24, height: 24 }}
              source={require("../../assets/img/Configuracoes.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CafeSesc}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "Sesc",
        }}
      />
      <Tab.Screen
        name="User"
        component={Compras}
        options={{
          tabBarActiveTintColor: "#000000ff",
          tabBarLabel: "Compras",
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
              style={{ width: 24, height: 24 }}
              source={require("../../assets/img/Configuracoes.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
