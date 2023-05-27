import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function Aula02({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >

    <Text style={styles.subTitulo} >Tensão elétrica</Text>
    <Text style={styles.texto} >O eletricista é o profissional responsável pela reparação e manutenção das instalações elétricas, seja em residências, seja em indústrias. Portanto, é uma profissão que exige bastante conhecimento técnico para saber o que projeta e para trabalhar com qualidade e segurança. Além do conhecimento, algumas ferramentas para eletricista também são necessárias.
    {'\n'}{'\n'}   
O trabalho com eletricidade acaba envolvendo várias atividades, sendo que muitas são complexas. Por isso, é fundamental contar com os equipamentos adequados para desenvolver as tarefas de forma correta e segura. Os benefícios de se trabalhar com esses itens são muitos: o eletricista evita riscos, executa o serviço de forma mais rápida, ganha muita qualidade, entre outros.</Text>

<Text style={styles.titulo} >1 - Kit chaves</Text>
    <Image
        style={styles.imagem}
        source={require('../../../../assets/kitChaves.jpg')}  />

<Text style={styles.titulo} >2 Alicates de diversos tipos</Text>
    <Image
        style={{height:500, width: '100%'}}
        source={require('../../../../assets/alicates.jpg')}  />

<Text style={styles.titulo} >3. Multímetro</Text>
    <Image
        style={{height:300, width: '100%'}}
        source={require('../../../../assets/multimetro.jpg')}  />

<Text style={styles.titulo} >4. alicate amperimetro</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/amperimetro.jpg')}  />

<Text style={styles.titulo} >5. Ferro de solda</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/ferrodesolda.jpg')}  />

<Text style={styles.titulo} >6. Chave de teste</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/chaveteste.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:453, width:82}}
        source={require('../../../../assets/detectortensao.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:250, width: '100%'}}
        source={require('../../../../assets/alicatedecapador.jpg')}  />

<Text style={styles.titulo} >7. Detector De Fase Caneta Teste Bip Sonoro</Text>
    <Image
        style={{height:400, width: '100%'}}
        source={require('../../../../assets/alicate.jpg')}  />

   </View>




   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1
    
  },
  scrollView:{
    margin: 10
  },

  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#51AC42',
    marginTop: 40,
    marginBottom: 20
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

export default Aula02