import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';




function Aula05({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
        <Text style={styles.titulo} >PADRÃO DE CORES PARA CABOS E FIOS
    </Text>

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/cores-cabo01.jpg')}  
    />

    <Text style={styles.subTitulo} >
        Quem trabalha com redes elétricas sabe que é imprescindível diferenciar a função de cada fio ou cabo, de modo a preservar a própria segurança e o bom funcionamento da rede. Aqui no Brasil, a norma NBR 5410 determina as cores dos revestimentos de acordo com a função do condutor: 
        {'\n'}{'\n'}
    </Text>


    <Text style={styles.texto}>
    Condutor Neutro
Qualquer condutor isolado, cabo unipolar ou veia de cabo multipolar utilizado como condutor neutro, em caso de identificação por cor, deve ser usada a cor azul-clara na isolação do condutor isolado ou da veia do cabo multipolar, ou na cobertura do cabo unipolar.
(NBR 5410:2004 item 6.1.5.3.1).
{'\n'}{'\n'}
NOTA: A veia com isolação azul-clara de um cabo multipolar pode ser usada para outras funções, que não a de condutor neutro, se o circuito não possuir condutor neutro ou se o cabo possuir um condutor periférico utilizado como neutro.
{'\n'}{'\n'}
Observe este trecho extraído da norma, “em caso de identificação por cor”, indica que outras formas de identificação podem ser usadas. Logo, as primeiras palavra deste trecho “qualquer condutor” deixam transparecer que pode ser qualquer tipo de condutor. Logicamente, deve ser levado em consideração todos os critérios técnicos de dimensionamento do cabo para que o condutor seja escolhido para a função. Os trechos seguintes da norma, estendem a mesma regra para todos as outras funções de cabos.
{'\n'}{'\n'}
Condutor de Proteção
Qualquer condutor isolado, cabo unipolar ou veia de cabo multipolar utilizado como condutor de proteção (PE), em caso de identificação por cor, deve ser usada a dupla coloração verde-amarela ou a cor verde (cores exclusivas da função de proteção), na isolação do condutor isolado ou da veia do cabo multipolar, ou na cobertura do cabo unipolar.
(NBR 5410:2004 item 6.1.5.3.2).
{'\n'}{'\n'}
Condutor de Proteção Terra ou PEN
Qualquer condutor isolado, cabo unipolar ou veia de cabo multipolar utilizado como condutor PEN deve ser identificado de acordo com essa função. Em caso de identificação por cor, deve ser usada a cor azul-claro, com anilhas verde-amarelo nos pontos visíveis ou acessíveis, na isolação do condutor isolado ou da veia do cabo multipolar, ou na cobertura do cabo unipolar (NBR 5410:2004 item 6.1.5.3.3).
{'\n'}{'\n'}
Condutor Fase</Text>

    <Image
        style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/cores-cabo.jpg')}  />
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
export default Aula05;