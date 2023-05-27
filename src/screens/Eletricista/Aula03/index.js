import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';



function Aula03({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Alicate amperimetro</Text>
    <Text style={styles.subTitulo} >Tensão elétrica</Text>
    <Text style={styles.texto} >O multímetro é a principal ferramenta de trabalho de um técnico nas áreas que envolve elétrica / eletrônica. 
    {'\n'}{'\n'}
Ele é o aparelho usado para medir principalmente corrente elétrica (A), tensão (V) e resistência elétrica (Ω), mas pode ser usado também para medir as mais variadas grandezas na elétrica ou eletrônica, como indutância (L), por exemplo. De forma geral existem dois tipos de multímetro, o analógico (de ponteiro) e o digital (de visor de cristal líquido). 
{'\n'}{'\n'}
Cada um com sua vantagem: o analógico é melhor para testar a maioria dos componentes enquanto o digital é melhor para medir tensões e testar resistores. 
{'\n'}{'\n'}
Ao longo dos anos, os multímetros digitais ganharam mais funções, sendo capazes de medir vários componentes que antes podiam ser testados somente com os multímetros analógicos.
{'\n'}{'\n'}
No mercado há vários tipos de multímetros e que possuem as mais diversão funções, desde as mais básicas até as mais complexas. Alguns modelos podem medir indutância, frequência e temperatura, por exemplo.
{'\n'}{'\n'}
Se tratando de multímetros analógicos e digitais, podemos citar as principais diferenças:
</Text>

    <Image
        style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/multimetros.jpg')}  />

<Text style={styles.texto} >
Os multímetros analógicos mostram o resultado da leitura usando um ponteiro e uma escala, assim é mais fácil ocorrer erros de leitura. Já o multímetro digital exibe a medição em forma numérica através de um visor de LCD, eliminando este tipo de erro.
{'\n'}{'\n'}
A saída dos multímetros analógicos é contínua, com isso pode ocasionar erros de aproximadamente 3% na medição. Já os multímetros digitais tem uma margem de erro de aproximadamente 0,5%.
{'\n'}{'\n'}
Temos uma maior gama de medições em um multímetro digital do que o analógico, como, por exemplo, a possibilidade de medir capacitância, temperatura e frequência. Estas características tornam o multímetro digital mais versátil.
{'\n'}{'\n'}
A calibração dos multímetros analógicos é feita manualmente, já a maioria dos multímetros digitais são calibrados automaticamente antes de cada medição.
Um multímetro digital oferece a facilidade de mostrar diretamente em seu visor o valor numérico da grandeza medida, sem necessidade de ficar fazendo multiplicações e leituras em escalas complicadas como ocorre com multímetros analógicos.
{'\n'}{'\n'}
Os multímetros analógicos costumam ser mais baratos que os digitais.
{'\n'}{'\n'}
Nesta publicação vamos falar apenas das funções básicas que todo multímetro deve ter e vamos dar atenção ao multímetro digital de baixo custo. Todos os multímetros, não importa se ele é analógico ou digital, possui uma chave seletora na parte frontal para escolhermos qual grandeza será medida.
{'\n'}{'\n'}
Na imagem abaixo podemos observar que a chave seletora possui algumas áreas separadas para a medição dessas grandezas:
</Text>

   </View>

   <Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/multimetro2.jpg')}  />

<Text style={styles.texto} >
Em multímetros digitais o valor da escala já indica o máximo valor a ser medido por ela, independente da grandeza. Temos abaixo uma indicação de valores típicos encontrados na prática para estas escalas:</Text>

   
<Text style={styles.texto} >
Escalas de tensão contínua: 200mV, 2V, 20V, 1000V ou 200mV, 2V, 20V, 1000V ou 1kV
{'\n'}{'\n'}
Escalas de tensão alternada: 200V, 750V
{'\n'}{'\n'}
Escalas de resistência: 200Ω, 2000Ω ou 2kΩ, 20kΩ, 200kΩ, 2MΩ ou 20000kΩ
{'\n'}{'\n'}
Escalas de corrente contínua: 200uA, 2000uA ou 2mA, 20mA, 200mA, 2A, 10 ou 20A
</Text>

<Text style={styles.texto} >
Em alguns multímetros digitais estas escalas se fazem de forma automática. Estes tipos de multímetros são conhecidos como auto range ou auto escala, e é necessário apenas selecionar o tipo de grandeza que será medida por ele. Em alguns casos podemos encontrar multímetros que tem apenas uma escala para tensão, uma para corrente e uma para resistência. Este tipo de multímetro também é auto range e não há necessidade de selecionar uma escala específica para  fazer a medição de tensão.
{'\n'}{'\n'}
Uma coisa muito importante ao se usar um multímetro digital é saber selecionar a escala correta para fazer a medição. Sendo assim, podemos exemplificar algumas grandezas com seus respectivos nomes nas escalas:
</Text>

<Text style={styles.texto} >
Tensão alternada: VCA, ACV, VAC ou V juntamente com o símbolo ~ sobre ele
{'\n'}{'\n'}
Tensão contínua: VCC, DCV, VDC ou V com duas linhas sobre ele, uma tracejada e outra contínua.
{'\n'}{'\n'}
Corrente contínua: DCA, ADC ou A com duas linhas sobre ele, uma tracejada e outra contínua.
{'\n'}{'\n'}
Corrente alternada: ACA ou A juntamente com o símbolo ~ sobre ele.
Resistência: Ohms ou Ω.
</Text>
 


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

export default Aula03