import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/views/Home';
import Evolucion from './app/views/Evolucion';
import Contactar from './app/views/Contactar';
import NuevoReto from './app/views/NuevoReto';
import Perfil from './app/views/Perfil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evolucion" component={Evolucion} />
        <Stack.Screen name="Contactar" component={Contactar} />
        <Stack.Screen name="NuevoReto" component={NuevoReto} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


