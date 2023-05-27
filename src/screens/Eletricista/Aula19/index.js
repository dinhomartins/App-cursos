import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula19({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >CIRCUITO DE ILUMINAÇÃO
LIGAÇÃO </Text>
    
    <Text style={styles.texto} >
    INTERRUPTOR DUAS SEÇÕES
    </Text>

    <Image
        style={{height:250, width: '40%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tecla2.jpg')}  
    />
    <Image
        style={{height:200, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/il05.jpg')}  
    />

    <Text style={styles.texto} >
    INTERRUPTOR TRÊS SEÇÕES
    </Text>
    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/il06.jpg')}  
    />

<Image
        style={{height:300, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/il07.jpg')}  
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

export default Aula19;