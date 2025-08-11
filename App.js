import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './src/Components/Login';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={Login} options={{title: "Primeiro", }}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}