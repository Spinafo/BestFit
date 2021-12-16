import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

export class Menu extends React.Component{

    viewMsg = ()=>{
        Alert.alert ("Has apretado un botón");
    }

    render(){
        <View style = {style.contenedor}>
            <View style = {style.menuPrincipal}>  
                <TouchableOpacity style = {style.boton} onPress ={this.viewMsg}>
                    <Text style = {style.textBoton}>BOTON</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}