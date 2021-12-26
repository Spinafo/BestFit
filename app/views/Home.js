import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Evolucion from './Evolucion';
import NuevoReto from './NuevoReto';
import Contactar from './Contactar';
import Perfil from './Perfil';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen:{
        flex:5,
        width: '100%',
        height: '100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        backgroundColor: '#353535'
    },
    fila:{
        flex:1,
        width:'100%',
        height:'100%',
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
        fontSize:15
    }
  });


export default function Home ({navigation}){

        return(
            <View style = {styles.container}>
                <View style = {styles.imagen}>
                    <Image source={require("../images/logo-fitness.jpg")}/>
                </View>
                    <View style = {styles.fila}>  
                        <TouchableOpacity style = {styles.boton} onPress = {()=> navigation.navigate("Evolucion")}>
                            <Text style = {styles.textBoton}>EVOLUCIÓN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.boton} onPress = {()=> navigation.navigate("NuevoReto")}>
                            <Text style = {styles.textBoton}>NUEVO RETO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.fila}>  
                        <TouchableOpacity style = {styles.boton} onPress = {()=> navigation.navigate("Perfil")}>
                            <Text style = {styles.textBoton}>PERFIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.boton} onPress = {()=> navigation.navigate("Contactar")}>
                            <Text style = {styles.textBoton}>CONTACTAR</Text>
                        </TouchableOpacity>
                    </View>
            </View>
    
        );
}


