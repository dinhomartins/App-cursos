import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula25({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >CIRCUITO INTERRUPTOR COM TOMADA </Text>
    
   

    <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tipostomatadas.jpg')}  
    />

    <Text style={styles.texto} >
    Abaixo, listamos todas essas tomadas!
    {'\n'}{'\n'}
Tipo A
A tomada tipo A é usada na América do Norte, América Central, América do Sul e Japão. Ela é formada pelos pinos chatos e foi criada em 1904, sendo modelo padrão no início do século 20.
{'\n'}{'\n'}
Tipo B
Também utilizada nas Américas e no Japão, a tomada tipo B traz um pino terra redondo, bastante aproveitado em computadores.
{'\n'}{'\n'}
Tipo C
Já a tomada tipo C é usada em toda a Europa, exceto Reino Unido, Irlanda, Chipre e Malta. Trata-se de um dos plugues mais encontrados no mundo, conseguindo se adaptar a outros tipos de tomadas.
{'\n'}{'\n'}
Tipo D
Antigo modelo Britânico, a tomada tipo D é padrão na Índia e Nepal. 
{'\n'}{'\n'}
Tipo E
Padrão da França, Bélgica, Polônia, Eslováquia, Tunísia, Marrocos e República Checa.
{'\n'}{'\n'}
Tipo F
A tomada tipo F é usada na Alemanha, Áustria, Holanda, Suécia, Finlândia, Noruega, Portugal, Espanha e Leste Europeu. Esse modelo foi criado após a Primeira Guerra Mundial e conta com dois clipes terra para a conexão elétrica.
{'\n'}{'\n'}
Tipo G e H
Usado na Alemanha, Áustria, Holanda, Suécia, Finlândia, Noruega, Portugal, Espanha e Leste Europeu. Modelo criado após a Primeira Guerra Mundial, a tomada conta com dois clipes terra para a conexão elétrica.
{'\n'}{'\n'}
Tipo I
Encontrado na Austrália, Nova Zelândia, Papua Nova Guiné, China e Argentina.
{'\n'}{'\n'}
Tipo J
A tomada tipo J é utilizada na Suíça e Lichenstein e apresenta semelhanças com o modelo usado aqui no Brasil. Contudo, ela é incompatível por conta das dimensões dos pinos. Em contrapartida, plugues do tipo C podem ser utilizados sem problemas nessas tomadas.
{'\n'}{'\n'}
Tipo K
Usado na Dinamarca e Groenlândia, com suporte a plugues do tipo C. Além disso, é a tomada mais simpática do mundo, pois a sua entrada se assemelha a um sorriso.
{'\n'}{'\n'}
Tipo L
Modelo utilizado na Itália, China e alguns países do norte da África, a tomada tipo L traz três pinos redondos em linha. Alguns modelos permitem o uso de plugues tipo C.
{'\n'}{'\n'}
Tipo M
A tomada tipo M é usada em alguns países da África e lembra bastante o plugue tipo D, mas com dimensões maiores. Em alguns países, como Israel, é utilizada em maquinário pesado.
{'\n'}{'\n'}
Tipo N
A tomada tipo N é usada no Brasil e na África do Sul e conta com um design compatível com plugues do tipo C.
{'\n'}{'\n'}
De maneira geral, é o modelo “universal” criado pelo IEC e adotado pelo Brasil para tentar padronizar as suas tomadas. 
{'\n'}{'\n'}
O problema da padronização surge do fato que o Brasil não tem uma voltagem unificada, com estados com 127 V e outros com 220 V, o que poderia ser melhor identificado com tipos diferentes de plugues.
    </Text>
   
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

export default Aula25