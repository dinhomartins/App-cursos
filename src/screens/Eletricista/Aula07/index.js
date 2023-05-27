import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';



function Aula07({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >QDC</Text>

    <Image
        style={{height:300, width: '50%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/qdc01.jpg')}  
    />


    <Text style={styles.subTitulo} >O que é quadro de distribuição?</Text>
    <Text style={styles.texto} >
    O quadro de distribuição é obrigatório em todas as instalações elétricas, pois é onde se localiza os dispositivos de proteção de uma instalação elétrica residencial, industrial, comercial etc. O quadro de distribuição é responsável por armazenar, proteger os dispositivos de proteção e faz a distribuição de todos os circuitos da instalação.
    {'\n'}{'\n'}
Podemos destacar que o quadro de distribuição também é conhecido por muitas pessoas como quadro geral, quadro de disjuntor e QDC (quadro de distribuição de circuitos). O quadro de distribuição pode ser encontrado em PVC ou metálico, nas residências o mais comum é em PVC, por ser mais barato. O QDC de ferro é mais usado em indústria e na montagem de comandos, tanto o quadro de distribuição de PVC quanto o metálico são encontrados de embutir e sobrepor.
</Text>

  

<Text style={styles.subTitulo} >Exemplos de QDC</Text>

        <Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/qdc02.jpg')}  
       />

        <Image
        style={{height:350, width: '50%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/qdc03.jpg')}  
       />

        <Image
        style={{height:350, width: '70%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/qdc04.jpg')}  
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

export default Aula07;