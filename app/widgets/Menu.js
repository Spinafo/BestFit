import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, FlatList } from 'react-native';
import { Evolucion } from '../views/Evolucion';
import { Home } from '../views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { db } from '../config/db';
import { collection, getDocs } from 'firebase/firestore';
 

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


export class Menu extends React.Component{

    state = {
        sitios: [],
        loading:true
    }

    constructor(props){
        super(props);
    }

    viewMsg = ()=>{
        Alert.alert ("Has apretado un botón");
    }

    componentDidMount(){
        const getData = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "BestFit"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log (doc.id, " => ", doc.data());
                    this.sitios=doc.data();
                    console.log ("Nombre: ", this.sitios.nombre);
                    console.log ("Tiempo: ", this.sitios.tiempo);
                });
            } catch (error) {
                console.log("Error : ", error);
            }
            };
            getData();
    }

    renderItem = data =>
        <View style={style.fila}>
            <TouchableOpacity style={styles.boton} onPress={() => this.viewMsg(data)}>
                <Text style={styles.textBoton}>{data.item.value.detalle}</Text>
            </TouchableOpacity>
        </View>

    render(){

        if (this.state.loading) {
            return(
                <View style={styles.contenedor}>
                    <Text>Cargando</Text>
                </View>
            )
        } else {
            return(
                <View style={styles.contenedor}>
                    <FlatList
                    data={this.state.sitios}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor= {(item, index) => item.key}
                    />
                </View>
            )
        }
    }
}
