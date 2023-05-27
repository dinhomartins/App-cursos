import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// import Ionicons from '@expo/vector-icons/Ionicons';

export default function AreaAtuacao() {
 return (
   <View  style={styles.container}>

    
    <View style={styles.containerCirculo}>
        <View style={styles.circulo}>
        
        </View>
        <Text style={styles.textoCirculo}>
            Eletricista
        </Text>
    </View>

    <View style={styles.container}>
        <View style={styles.circulo}>
        
        </View>
        <Text  style={styles.textoCirculo}>
            Comando Eletrico
        </Text>
    </View>

    <View style={styles.container}>
        <View style={styles.circulo}>
        
        </View>
        <Text  style={styles.textoCirculo}>
            Inst. Ar Condicionado
        </Text>
    </View>

    <View style={styles.container}>
        <View style={styles.circulo}>
        
        </View >
        <Text  style={styles.textoCirculo}>
            Geladeira
        </Text>
    </View>


   </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#eaeaea',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    containerCirculo:{
        justifyContent: 'center',
        flex: 1,
        borderColor: 'red',
    },
    circulo: {
        width: 70, 
        height:70, 
        backgroundColor: 'gray',
        margin: 5,
        borderRadius: 50,
        
    },
    textoCirculo:{
        textAlign: 'center'
    }
   
  });
  