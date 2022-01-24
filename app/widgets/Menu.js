import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, FlatList } from 'react-native';
import { db } from '../config/db';
import { collection, getDocs } from 'firebase/firestore';
 

let sitios = [];


const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535',
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5,
    },
    fila:{
        flex:1,
        flexDirection:'row',
        paddingBottom:50,
        
    },
    detalle:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: 1,
        backgroundColor: '#353535',
        paddingTop:5,
        paddingBottom:5,
    },
    boton: {
        width:'70%',
        backgroundColor:'#353535',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:15,
    },
    boton2: {
        width:'20%',
        backgroundColor:'#1B262C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginLeft:20,
        marginRight:40,
    },
    header: {
        backgroundColor:'#353535',
    },
    textBoton:{
        color:'#ffffff',
        fontSize:18,
    },
    textDetail:{
        color:'#ffffff',
        fontSize:14,
    }

});



export class Menu extends React.Component {

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
                    console.info (doc.data().detalle);
                    console.info (doc.data().completado);
                    sitios.push({"key":doc.id, "value":doc.data()});
                    this.setState({sitios:sitios, loading:false});
                    //this.sitios=doc.data();
                    console.log ("Nombre: ", sitios.nombre);
                    console.log ("Tiempo: ", sitios.tiempo);
                });
            } catch (error) {
                console.log("Error : ", error);
            }
            };
            getData();
    }

    renderItem = data =>
    <View style={styles.contenedor}>
    <TouchableOpacity style={styles.header} onPress = {()=> this.viewMsg(data)}>
            <Text style={styles.textBoton}>{data.item.value.nombre}</Text>
    </TouchableOpacity>
    <View style={styles.detalle}>            
        <TouchableOpacity style={styles.boton} onPress={() => this.viewMsg(data)}>
            <Text style={styles.textDetail}>{data.item.value.detalle}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boton2} onPress={() => this.viewMsg(data)}>
            <Text style={styles.textDetail}>{data.item.value.completado}</Text>
        </TouchableOpacity>
    </View>
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
