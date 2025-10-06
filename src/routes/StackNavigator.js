import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Telainicial from "../screens/TelaInicial";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Telainicial" component={Telainicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      
    </Stack.Navigator>
  );
}
