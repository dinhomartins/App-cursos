import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

function Aula01({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Conceitos elétricos</Text>
    <Text style={styles.subTitulo} >Tensão elétrica</Text>
    <Text style={styles.texto} >Tensão elétrica (denotada por ∆V), também conhecida como diferença de potencial (DDP), é a diferença de potencial elétrico entre dois pontos ou a diferença em energia potencial elétrica por unidade de carga elétrica entre dois pontos. Sua unidade de medida é o volt – homenagem ao físico italiano Alessandro Volta. </Text>

    <Image
        style={styles.imagem}
        source={require('../../../../assets/tensaoeletrica.png')}  />

   </View>

   {/* Corrente Eletrica */}
    <Text style={styles.subTitulo} >Corrente elétrica - O movimento ordenado de elétrons em condutores</Text>
    <Text style={styles.texto} >
    Corrente elétrica é o movimento ordenado de cargas elétricas em um condutor elétrico, sob a influência de uma diferença de potencial elétrico (ou voltagem) aplicada entre seus extremos. As cargas elétricas podem ser elétrons (cargas negativas) ou lacunas (cargas positivas), dependendo do material condutor. A unidade de medida da corrente elétrica é o ampere (A), que é definido como a quantidade de carga elétrica que passa por um ponto em um condutor em um segundo. A corrente elétrica é um conceito fundamental na eletricidade e é utilizada em muitas aplicações, como iluminação, eletrônica, motores elétricos, entre outras.
    </Text>
    <Image
        style={styles.imagem}
        source={require('../../../../assets/correnteEletrica.png')}  />

    {/* Resistência elétrica */}
    <Text style={styles.subTitulo} >Resistência elétrica</Text>
    <Text style={styles.texto} >
    Resistência elétrica é a oposição que um material oferece à passagem de corrente elétrica através dele. Ela é medida em ohms (Ω) e é representada pela letra "R". Essa oposição ao fluxo de elétrons pode ser causada por diversos fatores, como a geometria e a composição do material condutor, bem como sua temperatura.
    A resistência elétrica é importante porque ela limita a quantidade de corrente elétrica que pode fluir através de um circuito. É por isso que muitos dispositivos elétricos, como lâmpadas e aquecedores, possuem uma resistência elétrica embutida, que converte a energia elétrica em calor ou luz. Além disso, a resistência elétrica é um dos três elementos fundamentais de um circuito elétrico, juntamente com a voltagem (ou diferença de potencial elétrico) e a corrente elétrica. A relação entre esses três elementos é descrita pela Lei de Ohm, que estabelece que a corrente elétrica é diretamente proporcional à voltagem e inversamente proporcional à resistência elétrica.</Text>
    <Image
        style={styles.imagem}
        source={require('../../../../assets/resistenciaEletrica.jpg')}  />

        {/* Potência elétrica*/}
    <Text style={styles.subTitulo} >Potência elétrica</Text>
    <Text style={styles.texto} >
    Potência elétrica é a quantidade de energia elétrica consumida ou produzida por um dispositivo elétrico por unidade de tempo. Ela é medida em watts (W) e é representada pela letra "P". A potência elétrica pode ser calculada como o produto da voltagem (ou diferença de potencial elétrico) pela corrente elétrica que flui pelo dispositivo:
    {'\n'}{'\n'}
P = V x I
{'\n'}{'\n'}
onde P é a potência em watts, V é a voltagem em volts e I é a corrente elétrica em ampères.
{'\n'}{'\n'}
A potência elétrica é importante porque ela determina o quanto de energia elétrica um dispositivo pode consumir ou produzir em um determinado período de tempo. Ela também é importante na hora de calcular o custo de uso de um dispositivo elétrico, já que a maioria das companhias elétricas cobra pelo consumo de energia elétrica em kilowatt-hora (kWh), que é a quantidade de energia elétrica consumida em uma hora a uma potência de 1 kW.
{'\n'}{'\n'}   
Watt (W) é a unidade de medida de potência no Sistema Internacional de Unidades (SI). Ela é usada para expressar a taxa de consumo ou produção de energia em um sistema elétrico ou em outras áreas da física. A potência é definida como a quantidade de energia consumida ou produzida por unidade de tempo.
{'\n'}{'\n'}
O watt é definido como a potência produzida quando uma corrente elétrica de um ampere flui através de uma diferença de potencial (ou voltagem) de um volt. Ou seja, um watt é equivalente a um joule por segundo (J/s).
{'\n'}{'\n'}
O watt é amplamente utilizado para expressar a potência de dispositivos elétricos, como lâmpadas, motores elétricos, aquecedores e outros. Por exemplo, uma lâmpada de 60 watts consome 60 joules de energia elétrica por segundo, enquanto um motor elétrico de 1 cavalo-vapor (hp) produz cerca de 746 watts de potência.</Text>
    
    <Image
        style={styles.imagem}
        source={require('../../../../assets/potenciaEletrica.jpg')}  />


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

export default Aula01