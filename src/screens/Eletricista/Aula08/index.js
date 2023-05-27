import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula08({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >DR</Text>

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/dr.jpg')}  
    />

    <Text style={styles.subTitulo} >DR (diferencial residual)</Text>
    <Text style={styles.texto} >
    O DR é responsável por proteger contra fuga de corrente elétrica, sendo assim protege contra choques elétricos. Existem dois tipos de DR, que são os IDR (interruptor diferencial residual) e DDR (disjuntor diferencial residual). Os DR também possuir curvas B, C e D, e diversos modelos como por exemplo, bipolar, tripolar e tetrapolar.</Text>

<Text style={styles.subTitulo} >Exemplos de QDC</Text>

        <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/idr.jpg')}  
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

export default Aula08;