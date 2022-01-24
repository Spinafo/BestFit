import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Menu } from '../widgets/Menu';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contenido:{
      flex:6,
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
        backgroundColor: '#154360'
    },
    boton: {
        width:'100%',
        height:'100%',
        marginLeft:2,
        backgroundColor:'#1A5276',
        justifyContent:'center',
        alignItems:'center'
    },
    textBoton:{
        color:'#ffffff',
        fontSize:15
    }
  });

export default function Evolucion ({navigation}){
        return(
            <View style = {styles.container}>
                <View style = {styles.contenido}>
                    <Menu/>
                </View>
                <View style = {styles.fila}>  
                        <TouchableOpacity style = {styles.boton} onPress = {()=> navigation.navigate("NuevoReto")}>
                            <Text style = {styles.textBoton}>NUEVO RETO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.fila}>  
                        <TouchableOpacity style = {styles.boton}>
                            <Text style = {styles.textBoton}></Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
}