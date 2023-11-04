import Home from './screen/Home';
import Screen02 from './screen/Screen02';
import Screen03 from './screen/Screen03';
import Screen04 from './screen/Screen04';
import {createNativeStackNavigator, createStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false, gestureEnabled: false}}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Screen02'
          component={Screen02}
          options={{headerShown: false}}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Screen03'
          component={Screen03}
          options={{headerShown: false}}
        >
        </Stack.Screen>
        <Stack.Screen
          name='Screen04'
          component={Screen04}
          options={{headerShown: false}}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};