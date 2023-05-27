import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula16({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Curva dos disjuntores</Text>
    <Text style={styles.subTitulo} >Quais são e para que servem as curvas dos disjuntores?</Text>

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/dr.jpg')}  
    />

    <Text style={styles.texto} >
        A instalação de disjuntor é uma questão de segurança, e por se tratar de questão de segurança deve ser levada muito a sério e nem sempre o que  os eletricistas encontram nas instalações. Ainda pior do que uma instalação que tenha sido feita de qualquer maneira e que tenha disjuntores mal dimensionados são os ditos profissionais de elétrica que não sabem dimensionar novos disjuntores para uma troca e acabam agravando o problema.
        {'\n'}{'\n'}
        Conhecer bem as caraterísticas de funcionamento dos componentes elétricos é um diferencial nos profissionais, qualquer eletricista conhece um disjuntor, mas poucos sabem como eles funcionam. Dimensionar um disjuntor e dimensiona-lo corretamente é muito mais delicado do que simplesmente saber qual a corrente do equipamento, circuito ou instalação ao qual se quer proteger, tem que saber exatamente qual tipo de carga será instalada.
        {'\n'}{'\n'}
        Para cada tipo de carga foi estipulado uma curva de ruptura para o disjuntor e essas curvas foram separadas em categorias. A curva de ruptura do disjuntor é o tempo em que o disjuntor suporta uma corrente acima da corrente nominal por determinado tempo. Quando se tem uma equipamento muito delicado necessita-se que a interrupção do circuito quando a corrente passe o limite de funcionamento seja muito rápida, para que o equipamento não seja danificado, em compensação na partida de um motor por exemplo, para que este saia do estado de inércia e chegue a sua velocidade máxima uma grande corrente é necessária no instante da partida, ás vezes muitas vezes maior do que a corrente para que este mesmo motor esteja em velocidade plena, nestes casos o disjunto tem que suportar a corrente alta durante um período de tempo maior.
        {'\n'}{'\n'}
        Além do período de tempo as curvas de rupturas estipulam o quanto maior essas correntes podem ser em relação as correntes nominais.
    </Text>

        <Text style={styles.subTitulo} >Curva B:</Text>

        <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/curvab.jpg')}  
       />

        <Text style={styles.texto} >
            A curva de ruptura B para um disjuntor estipula, que sua corrente de ruptura esta compreendido entre 3 e 5 vezes a corrente nominal, um disjuntor de 10A nesta curva deve operar quando sua corrente atingir entre 30A a 50A.
            {'\n'}{'\n'}
            Os disjuntores curva B são usados onde se espera um curto circuito com baixa intensidade, normalmente cargas resistivas, em residencias nas tomadas de uso comum, onde a demanda de corrente de partida do equipamento é baixa.
        </Text>

        <Text style={styles.subTitulo} >Curva C:</Text>

        <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/curvac.jpg')}  
       />

        <Text style={styles.texto} >
        A curva de ruptura C para um disjuntor estipula, que sua corrente de ruptura esta compreendido entre 5 e 10 vezes a corrente nominal, um disjuntor de 10A nesta curva deve operar quando sua corrente atingir entre 50A a 100A.
        {'\n'}{'\n'}
Os disjuntores de curva C são usado onde se espera uma curto circuito de intensidade média e onde a demanda de corrente para partida de equipamentos é mediana, normalmente cargas indutivas, como motores, sistemas de comando e controle, circuitos de iluminação em geral e ligação de bobinas.
        </Text>

        <Text style={styles.subTitulo} >Curva D:</Text>

        <Image
        style={{height:350, width: '80%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/curvad.png')}  
        />

        <Text style={styles.texto} >
        A curva de ruptura D para um disjuntor, estipula que sua corrente de ruptura esta compreendido entre 10 e 20 vezes a corrente nominal, um disjuntor de 10A nesta curva deve operar quando sua corrente atingir entre 100A a 200A.
        {'\n'}{'\n'}
Os disjuntores de curva D são usado onde se espera uma curto circuito de intensidade alta e onde a corrente de partida é muito acentuada, sendo muito utilizados em grande motores e grandes transformadores.
{'\n'}{'\n'}
Não existe contudo disjuntores de curva A, o motivo é para que o A da curva não seja confundido com o A de ampere, unidade de corrente elétrica.</Text>


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

export default Aula16;