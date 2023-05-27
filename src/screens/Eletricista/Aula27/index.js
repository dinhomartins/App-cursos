import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula27({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Eletro Boia </Text>
    
   

    <Image
        style={{height:150, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/boia2.jpg')}  
    />
    <Text style={styles.texto} >Como instalar boia elétrica</Text>


<Text style={styles.texto} >
Antes de ensinar como instalar a boia elétrica, vamos falar do que se trata esse objeto. Esse item trata-se de um instrumento usado para ter controle e indicação de nível em líquidos. Por meio de uma flutuação dessa boia acaba ficando bem posicionada, podendo ligar ou desligar em um circuito elétrico.
</Text>

<Text style={styles.subTitulo} >Aonde a boia elétrica é usada? </Text>

<Text style={styles.texto} >
A boia elétrica pode ser instalada com facilidade e é ideal para uso em poços, caixas, tanques, efluentes industriais e bombas de porão. Seja uma residência, empresa ou qualquer construção civil. Isso porque esse instrumento possibilita ao mesmo tempo um controle do nível de água no reservatório alto (caixa d’água) e do nível do reservatório baixo (cisterna).
{'\n'}{'\n'}
No mercado você vai encontrar muitos tipos de boias. Esse itens funcionam de modo automático, mas uma das boias mais utilizada são as que funcionam por meio de um contato com o Mércurio . De modo geral, as boias vêm com dois fios um Preto e outro Vermelho.

</Text>

<Text style={styles.subTitulo} >Como instalar boia elétrica? </Text>

<Text style={styles.texto} >
A instalação da boia elétrica depende muito do estilo e modelo do objeto. No caso de duas boias, sendo uma boia alta para a caixa a outra baixa que vai fazer a ligação da cisterna, é necessário fazer uma ligação em série.
{'\n'}{'\n'}
Nesse exemplo que demos acima é preciso unir os fio vermelhos e fazer uma ligação das outras pontas do fio preto, uma no fio de energia que vai para bomba elétrica e para finalizar, um outro no fio que vem da bomba.
{'\n'}{'\n'}
Mas, se você quer instalar uma única boia na caixa de cima, então trata-se de uma ligação bem simples. Pegue o fio vermelho e ligue ele no fio que vem da energia e o preto coloque no fio que acaba por vir da bomba elétrica. Nesses casos, as ligações são para voltagem 110volts e 220 volts bifásico.
</Text>

<Image
        style={{height:460, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/boia.jpg')}  
    />

<Text style={styles.subTitulo} >Como instalar eletroboia? </Text>
   
<Image
        style={{height:550, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/diagramaboia.jpg')}  
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

export default Aula27