import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula22({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >CIRCUITO DE TOMADA </Text>
    
    <Text style={styles.texto} >
    INTERRUPTOR DUAS SEÇÕES
    </Text>

    <Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tomada.jpg')}  
    />
    <Image
        style={{height:200, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tomada01.jpg')}  
    />

    <Text style={styles.texto} >
    INTERRUPTOR TRÊS SEÇÕES
    </Text>
    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t1.jpg')}  
    />

<Image
        style={{height:300, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t2.jpg')}  
    />

<Image
        style={{height:300, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t3.jpg')}  
    />
  
</View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
    
  },
  scrollView:{
    padding:10
  },

  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#51AC42'
  },
  subTitulo:{
    fontSize: 18,
    marginTop: 20
  },
  texto:{
    fontSize: 14,
    marginTop: 20
  },
  imagem:{
    width: '100%',
    height: 250,
    marginTop: 20
  }
})

export default Aula22;