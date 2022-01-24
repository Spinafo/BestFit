import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, FlatList } from 'react-native';
import { Evolucion } from '../views/Evolucion';
import { Home } from '../views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from '../config/db';
import { collection, getDocs } from 'firebase/firestore';
import { Menu } from '../widgets/Menu';



let sitios = [];

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    fila:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: 1,
        backgroundColor: '#353535'
    },
    boton: {
        width:'50%',
        height:'50%',
        backgroundColor:'#353535',
        justifyContent:'center',
        alignItems:'center'
    },
    textBoton:{
        color:'#ffffff',
        fontSize:18
    }
});


export default function NuevoReto ({navigation}){

        return(
            <View style = {styles.container}>
                <View>
                    <Text>Pantalla Nuevo Reto</Text>
                </View>
                 {/*<Menu/>*/}
            </View>
    
        )
}