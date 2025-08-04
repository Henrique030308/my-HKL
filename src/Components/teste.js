
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/Components/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="principal" component={Home} options={{title: "PRIMEIRO", }}/>
      </Stack.Navigator>
    </NavigationContainer> 
  );
}
