import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import Login from "../screens/Login";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Inicial" component={Login} />
      
    </Stack.Navigator>
  );
}
