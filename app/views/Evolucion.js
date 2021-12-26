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

export default function Evolucion ({navigation}){
        return(
            <View style = {styles.container}>
                <View>
                    <Text>Pantalla Evolucion</Text>
                </View>
            </View>
    
        )
}