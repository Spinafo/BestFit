import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Menu } from '../widgets/Menu';




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Perfil ({navigation}){
        return(
            <View style = {styles.container}>
                <View>
                    <Text>Pantalla Perfil</Text>
                </View>
            </View>
    
        )
}