import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Produtos from './Screens/Produtos';


export default function App() {

  const stack = createStackNavigator();

  return (
   <NavigationContainer>

    <stack.Navigator>
      <stack.Screen name='Home' component={Home}  options={{ headerShown: false }}></stack.Screen>
      <stack.Screen name='Produtos' component={Produtos} options={{ headerShown: false }}></stack.Screen>
    </stack.Navigator>


   </NavigationContainer>
  );
}