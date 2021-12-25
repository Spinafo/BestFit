import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    imagen:{
        flex:7,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1,
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

export class Menu extends React.Component{

    viewMsg = ()=>{
        Alert.alert ("Has apretado un botón");
    }

    render(){
        return(
        <View style = {styles.contenedor}>
            <View style = {styles.imagen}>
                <Image source={require("../images/logo-fitness.jpg")}/>
            </View>
            <View style = {styles.fila}>  
                <TouchableOpacity style = {styles.boton} onPress ={this.viewMsg}>
                    <Text style = {styles.textBoton}>EVOLUCIÓN</Text>
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
