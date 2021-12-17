import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    fila:{
        flex:2,
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

export class Menu extends React.Component{

    viewMsg = ()=>{
        Alert.alert ("Has apretado un botón");
    }

    render(){
        return(
        <View style = {styles.contenedor}>
            <View style = {styles.fila}>  
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>BOTON 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>BOTON 2</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.fila}>  
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>BOTON 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>BOTON 4</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}
