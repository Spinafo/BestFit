import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Evolucion } from '../views/Evolucion';
import { Home } from '../views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

function EvolucionScreen({ navigation }) {
    return (
          <Evolucion/>
    );
  }

export class Menu extends React.Component{

    viewMsg = ()=>{
        Alert.alert ("Has apretado un botón");
    }

    render(){
        return(
        <View style = {styles.contenedor}>
            <View style = {styles.fila}>  
                <TouchableOpacity style = {styles.boton} onPress= {()=> navigation.navigate("Evolucion")}>
                    <Text style = {styles.textBoton}>EVOLUCIÓN 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>NUEVO RETO</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.fila}>  
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>PERFIL</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>CONTACTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
