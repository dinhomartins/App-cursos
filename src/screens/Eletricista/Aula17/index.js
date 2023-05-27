import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula17({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Disjuntor Motor</Text>
    

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/djmotor.jpg')}  
    />

<Text style={styles.subTitulo} >Quais são e para que servem as curvas dos disjuntores?</Text>

    <Text style={styles.texto} >
    Um disjuntor motor é um dispositivo de proteção elétrica utilizado para interromper a corrente elétrica em um motor elétrico em caso de sobrecarga, curto-circuito ou outras condições anormais. Ele desempenha um papel crucial na proteção do motor contra danos causados por correntes excessivas e ajuda a evitar riscos de incêndio ou outros acidentes elétricos.
    {'\n'}{'\n'}
O disjuntor motor é projetado para suportar a alta corrente de partida de um motor e pode ser ajustado para diferentes níveis de corrente, dependendo das características do motor. Ele possui uma capacidade de interrupção adequada para lidar com a corrente de curto-circuito que pode ocorrer durante o funcionamento do motor.
{'\n'}{'\n'}
Além disso, o disjuntor motor normalmente inclui recursos de proteção adicionais, como proteção contra falha de fase, proteção contra subcarga e proteção contra sobretemperatura. Esses recursos garantem que o motor esteja protegido contra várias condições anormais de operação que possam ocorrer.
{'\n'}{'\n'}
Os disjuntores motores estão presentes em painéis elétricos e sistemas de controle industrial, onde são utilizados para proteger e controlar motores elétricos de diversos tamanhos e aplicações, desde pequenos motores em equipamentos domésticos até motores industriais de grande porte.
    </Text>

    <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/djmotor1.jpg')}  
    />

<Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/djmotor2.jpg')}  
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

export default Aula17;