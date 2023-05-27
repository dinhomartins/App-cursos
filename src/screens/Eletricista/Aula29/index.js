import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula29({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >SEÇÃO DO CABO</Text>

    <Text style={styles.texto} >
         DIMENSIONAMENTO DE FIOS E CABOS
    </Text>
   

    <Image
        style={{height:330, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tabela.jpg')}  
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
    margin:10
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

export default Aula29