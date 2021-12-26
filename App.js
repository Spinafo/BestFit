import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        <Stack.Screen name="Home" component={Home}
            options={{
              title: 'Home',
              headerStyle: {
              backgroundColor: '#154360',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
              }}/>
        <Stack.Screen name="Evolucion" component={Evolucion}
            options={{
              title: 'Evolucion',
              headerStyle: {
              backgroundColor: '#154360',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('Home')}
                  title="Home"
                  color="#ffffff"
                  backgroundColor="#1B262C"
                />),
              }}/>
        <Stack.Screen name="Contactar" component={Contactar}
            options={{
              title: 'Contactar',
              headerStyle: {
              backgroundColor: '#154360',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('Home')}
                  title="Home"
                  color="#ffffff"
                  backgroundColor="#1B262C"
                />),
              }}/>
        <Stack.Screen name="NuevoReto" component={NuevoReto}
            options={{
              title: 'Nuevo Reto',
              headerStyle: {
              backgroundColor: '#154360',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('Home')}
                  title="Home"
                  color="#ffffff"
                  backgroundColor="#1B262C"
                />),
              }}/>
        <Stack.Screen name="Perfil" component={Perfil}
            options={{
              title: 'Perfil',
              headerStyle: {
              backgroundColor: '#154360',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
              fontWeight: 'bold',
              },
              headerRight: () => (
                <Button
                  onPress={() => alert('Home')}
                  title="Home"
                  color="#ffffff"
                  backgroundColor="#1B262C"
                />),
              }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


