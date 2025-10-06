import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from "../screens/Home";
import CafeSenac from "../screens/CafeSenac";
import CafeSesc from "../screens/CafeSesc";
import Compras from "../screens/Compras";
import  Transferencia from "../screens/Transferencia";

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
          tabBarActiveTintColor: "#B98875",
          tabBarLabel: "Caffee",
        }}
      />
      <Tab.Screen
        name="Local"
        component={CafeSenac}
        options={{
          tabBarActiveTintColor: "#B98875",
          tabBarLabel: "Lojas",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CafeSesc}
        options={{
          tabBarActiveTintColor: "#B98875",
          tabBarLabel: "Pedidos",
        }}
      />
      <Tab.Screen
        name="User"
        component={Compras}
        options={{
          tabBarActiveTintColor: "#B98875",
          tabBarLabel: "Login",
        }}
      />

      <Tab.Screen
        name="Details"
        component={Transferencia}
        options={{
        }}
      />
    </Tab.Navigator>
  );
}