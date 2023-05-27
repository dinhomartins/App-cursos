import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula09({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >DPS</Text>

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/dps.jpg')}  
    />

    <Text style={styles.subTitulo} >DPS (dispositivos de proteção contra surtos)</Text>
    <Text style={styles.texto} >
        O DPS é um dispositivo de proteção contra surtos elétricos, importante para proteger os equipamentos elétricos e eletrônicos. Os surtos elétricos acontecem por causa das descargas atmosféricas que atingem redes elétricas e anomalias na rede elétrica, como por exemplo acionamento de grandes motores.
    </Text>

<Text style={styles.subTitulo} >Exemplos de DPS</Text>

        <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/dps01.jpg')}  
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

export default Aula09;