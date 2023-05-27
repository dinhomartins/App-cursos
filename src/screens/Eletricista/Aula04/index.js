import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';




function Aula04({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Medindo tensões elétricas</Text>
    <Text style={styles.subTitulo} >SEMPRE TOME CUIDADO AO MEDIR TENSÕES E CORRENTES, POIS HÁ O RISCO DE CHOQUE ELÉTRICO QUE PODE CAUSAR MORTE. MANUSEIE SEMPRE O EQUIPAMENTO SEGUINDO AS RECOMENDAÇÕES DO FABRICANTE E NUNCA TOQUE EM FIOS OU PARTES METÁLICAS ENERGIZADAS.</Text>
    <Text style={styles.texto} >A voltagem representa uma medida da energia elétrica potencial existente entre dois pontos. Você pode analisar a voltagem de um circuito doméstico ou de baterias usando um multímetro digital, um multímetro analógico ou um voltímetro. A maioria dos eletricistas e aprendizes prefere o multímetro digital, mas você também pode usar o dispositivo analógico. O voltímetro mede apenas a voltagem, sendo útil apenas se você não planeja analisar outros valores. 
    {'\n'}{'\n'}</Text>

    <Text style={styles.subTitulo} >1 - Ponha o pino vermelho na entrada V e o pino preto na entrada COM. </Text>

    <Text style={styles.texto}>
Multímetros digitais são considerados os dispositivos mais fáceis para se medir a voltagem, assim como outras medidas (como ampères e ohms). Insira o pino vermelho na entrada marcada com um V e insira o pino preto na entrada marcada com COM.[1]
Não inverta os fios ou você corre o risco de destruir os circuitos do multímetro. É importante coordenar as cores corretamente.
    </Text>

    <Image
        style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/teste01.jpg')}  />

<Text style={styles.subTitulo} >2 - Selecione o modo para voltagem AC ou DC com o botão de seleção central. </Text>

<Text style={styles.texto}>
O símbolo para DC costuma estar indicado por uma linha reta e três pontos inferiores, enquanto o símbolo para AC é geralmente uma linha ondulada.[2] Alguns multímetros alternam a exibição de DC como DCV e de AC como ACV — encontre esses símbolos no botão e gire-o até chegar no tipo de voltagem que deseja medir.

.A voltagem DC é comumente usada em baterias e pequenos eletrônicos, enquanto a voltagem AC costuma estar presente em eletrônicos domésticos e tomadas.
.Configure o multímetro para medir volts em vez de ampères ou ohms. Caso tente medir a voltagem sem estar na unidade correta, o multímetro pode acabar danificado.</Text>

<Image
    style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
    source={require('../../../../assets/teste02.jpg')}  />



<Text style={styles.subTitulo} >3 - Escolha a amplitude da voltagem a ser testada.  </Text>

<Text style={styles.texto}>
A maioria dos multímetros digitais tem alcance dinâmico, de modo que se ajustam automaticamente. Entretanto, às vezes pode ser necessário fazer essa mudança de forma manual. Confira a voltagem regular do dispositivo eletrônico — ela costuma estar indicada no manual do usuário ou em algum ponto da bateria ou do dispositivo. Ajuste a amplitude para um nível acima da voltagem a ser medida, de modo que se estiver medindo uma bateria de 12 V será preciso girar o botão até chegar em 20 V para obter uma medida precisa.[3]
Caso escolha um intervalo baixo demais para o teste, o multímetro exibirá "1", indicando que é preciso aumentá-lo.
Se não souber a voltagem operacional, você pode ajustar o multímetro para a amplitude mais elevada e descer até chegar em uma leitura precisa.</Text>

<Image
    style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
    source={require('../../../../assets/teste03.jpg')}  />


<Text style={styles.subTitulo} >4 - Teste o multímetro em uma bateria antes de tudo.  </Text>

<Text style={styles.texto}>
Ponha o pino vermelho no terminal positivo e o pino preto no terminal negativo, escolhendo o intervalo superior à voltagem regular da bateria com o botão central. Lembre-se de segurar apenas o revestimento plástico de cada pino.
Se colocar os pinos nos terminais errados, o multímetro exibirá uma versão negativa da medida correta, de modo que um valor de 20 V será exibido como - 20 V. Evite fazê-lo para não correr o risco de danificar o equipamento.[4]
Para testar a voltagem em outros componentes elétricos, identifique os terminais positivo e negativo no guia do fabricante para colocar os pinos nos locais corretos.</Text>



<Text style={styles.subTitulo} >5 - Leia o valor exibido na tela para determinar a voltagem medida e faça ajustes conforme a necessidade.  </Text>

<Text style={styles.texto}>
Se houver posto os pinos nos terminais certos e configurado o multímetro na voltagem e na amplitude corretas, ele exibirá o valor preciso com rapidez.
Se a tela exibir "1" ou tiver um símbolo negativo ao lado da medida, é preciso ajustar o intervalo ou inverter os conectores.[5]</Text>

<Image
    style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
    source={require('../../../../assets/teste04.jpg')}  />

<Image
    style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
    source={require('../../../../assets/teste05.jpg')}  />


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

export default Aula04