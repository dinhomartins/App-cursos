import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula26({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Relé Fotoelétrico </Text>
    <Text style={styles.texto} >O que é Carateristícas e Funcionamento</Text>
   

    <Image
        style={{height:350, width: '50%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/rele.jpg')}  
    />



<Text style={styles.texto} >
Relé fotoelétrico é um equipamento que se enquadra no nicho de sensores, esse modelo de sensor é utilizado em larga escala e visto com grande frequência no nosso dia a dia basta levantar nossas cabeças quando estivermos caminhando pelas ruas e olhar no alto de alguns postes esse sensor o Relé Fotoelétrico, o responsável por ligar e desligar a iluminação pública, mas ele ainda pode ser aplicado em sistemas de segurança, automóveis, máquinas industriais, equipamentos médicos e eletrônica embarcada.
{'\n'}{'\n'}
O sensor fotoelétrico possui diversas aplicações e com isso ele possui diversos tipos, dessa forma, nesse artigo vamos mostrar as características desse equipamento e quais suas variações
</Text>

<Text style={styles.subTitulo} >Características do relé fotoelétrico </Text>

<Text style={styles.texto} >

Um relé fotoelétrico possui duas características macro, ou ele será um transdutor ou simplesmente um sensor. Um relé fotoelétrico será um transdutor quando sua ele tiver como função base converter energia luminosa radiante em energia elétrica, e isso acontece com as fotocélulas na iluminação pública.
Já por outro lado, os sensores que tem como característica converter luz em uma variável dentro de uma grandeza elétrica seja ela corrente ou tensão, são conhecidos como LDRs e foto-diodos.
{'\n'}{'\n'}
Sendo assim, para que possamos começar os projetos com o pé direito vamos analisar as características que devem ser levadas em consideração ao inserir um relé fotoelétrico no projeto, veja:
{'\n'}{'\n'}
Sensibilidade
{'\n'}{'\n'}
Esse ponto no relé fotoelétrico mostra como o sensor vai atuar ao receber uma variável luminosa, sendo assim, em aplicações de eletrônica os mais sensíveis são os mais cogitados, pois um simples fóton é capaz de acionar o circuito.
{'\n'}{'\n'}
Resposta Espectral
{'\n'}{'\n'}
Ao contrário do olho humano, os relé fotoelétrico conseguem enxergar além de nós meros mortais, pois esses sensores podem perceber o sinal de radiação infravermelho, sendo assim podem ser comandados por sinais de LED infravermelhos, Lasers e mesmo outras fontes de radiação infravermelha ou ultra violeta.
{'\n'}{'\n'}
Velocidade
{'\n'}{'\n'}
Em muitas aplicações são exigidas uma velocidade alta para percepção de luz ou sombra, por exemplo em encoders ópticos ou leitor de códigos de barra, mas assim como ele possui aplicações de ala velocidade ele também pode atuar em baixas velocidades de resposta sendo assim seu range pode variar de 10kHz até dezenas de Megahertz.
Conheça os tipos de relé fotoelétrico
{'\n'}{'\n'}
Nas aplicações atuais encontramos disponíveis no mercado dezenas de modelos de relé fotoelétrico, os quais possuem configurações que dependem sempre de sua aplicação, sendo assim separamos as principais versões para que você conheça, veja:
LDRs: Light Dependent Resistors, dependendo da quantidade de luz na base de Sulfeto de Cádmio o valor da sua resistência é alterada;
{'\n'}{'\n'}
Foto-Células: Dispositivos que em função da quantidade de luz em sua superfície geram tensões entre 0,6 – 0,7V, e suas junções são de Silício;
Foto-Diodo: Dispositivo que pode ser usado tanto como foto-condutivo quanto voltaico, seu funcionamento baseia-se numa junção semicondutora semelhante ao das foto-células e quando uma intensidade de luz incide sua superfície ele libera cargas, dessa forma ele opera como foto-voltaíco;
{'\n'}{'\n'}
Foto-Transitores: Funciona basicamente igual a um foto-diodo, porém sua estrutura de junções é maior sendo assim esse modelo possui uma menor velocidade;
Os relés fotoelétricos podem ser adquiridos em suas mais diversas configurações, modelos, dimensões para as mais diversas aplicações. Alguns fabricantes como Rockwell, Omron e Metaltex possuem linhas de sensores específicos para determinadas aplicações, sendo assim você tendo conhecimento da sua real necessidade, o exato modelo que te atende a escolha do equipamento fica muito mais fácil.
</Text>

<Image
        style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/relediagrama.jpg')}  
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

export default Aula26