import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula28({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Como calculamos a bitola de fio ou seção do condutor </Text>
  

    <Text style={styles.subTitulo} >Para calcular a bitola de fio de acordo com a norma NBR 5410 é importante responder os seguintes critérios abaixo. </Text>

<Text style={styles.texto} >
Qual a corrente do circuito{'\n'}{'\n'}
Como os cabos serão instalados{'\n'}{'\n'}
Qual a quantidade de cabos por circuito{'\n'}{'\n'}
Qual o tipo de isolação será usado no cabo{'\n'}{'\n'}
Quantos cabos irão passar dentro do mesmo eletroduto 
</Text>

<Text style={styles.subTitulo} >
Passo 1: Qual a corrente do circuito para determinar a bitola de fio do chuveiro
</Text>

<Text style={styles.texto} >
No primeiro passo para calcular a bitola de fio ou seção mínima desse condutor, nós precisamos descobrir qual a corrente elétrica do circuito do chuveiro..
{'\n'}{'\n'}
Neste exemplo, o chuveiro tem uma potência elétrica de 5500W e a tensão elétrica é de 220V, e para isso teremos que fazer uma continha básica.
</Text>

<Text style={styles.subTitulo} >
Formula
</Text>

<Text style={styles.texto} >
V = VOLTAGEM {'->'} Tensão{'\n'}{'\n'}
W = WATTS {'->'} POTÊNCIA{'\n'}{'\n'}
A = AMPERES {'->'} Corrente{'\n'}{'\n'}

Para descobrir a corrente de um equipamento verifique a sua potencia e aplica a seguinte formula
{'\n'}{'\n'}
W ÷ V = A
{'\n'}{'\n'}
5500W  ÷ 220V = 25A
</Text>
<Image
        style={{height:200, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/lorenzeti.png')}  
    />

<Image
        style={{height:260, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/chuv.jpg')}  
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

export default Aula28