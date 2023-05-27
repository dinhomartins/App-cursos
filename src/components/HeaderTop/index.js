import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

 function HeaderTop() {
 return (
   
   <View style={styles.container}>
    <Text style={styles.textoColor} >Cursos Profissionalizantes</Text>
   </View>
  );
}


const styles = StyleSheet.create({
    container: {
      height: 150,
      padding: 10,
      backgroundColor: '#31004D',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center'
    },
    textoColor:{
        color: '#fff'
    }
   
  });
  

  export default HeaderTop