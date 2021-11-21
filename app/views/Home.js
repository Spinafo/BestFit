import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image source={require("../images/logo-fitness.jpg")}/>
                </View>
                <View>
                    <Text>Zona Clickable</Text>
                </View>
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
