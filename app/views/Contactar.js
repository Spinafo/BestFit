import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function Contactar ({navigation}){
        return(
            <View style = {styles.container}>
                <View>
                    <Text>Pantalla Contactar</Text>
                </View>
            </View>
    
        )
}