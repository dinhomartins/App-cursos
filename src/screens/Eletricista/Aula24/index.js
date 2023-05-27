import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


function Aula24({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >TOMADA</Text>
    
    <Text style={styles.texto} >
    Padrão brasileiro
    </Text>

    <Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/tomada-padrao.jpg')}  
    />

    <Text style={styles.texto} >
    Desde o final do século 19, os países começaram a escolher plugues de tomadas próprios, sem muita conexão com o restante do mundo. O que não era um incômodo até o momento que o volume de exportação de aparelhos eletrônicos começou a aumentar, assim como o número de viajantes e turistas. No entanto, nunca se chegou em um acordo de “tomada universal”, por isso é tão importante pesquisar sobre os tipos de tomadas e recorrer aos adaptadores.
    {'\n'}{'\n'}
Os modelos instalados podem variar no próprio país. No Brasil, por exemplo, apareceram mais de 12 tipos de plugues e tomadas. Visto isso, a África do Sul e o Brasil resolveram padronizar as tomadas. Aqui a decisão foi bem polêmica, já que muitos consumidores tiveram que adaptar as suas casas ao novo modelo. Até mesmo fabricantes foram impactados.
{'\n'}{'\n'}
Com o novo padrão existem apenas dois tipos de plugues, com dois ou três pinos, e um único tipo de tomada, com três encaixes. Os plugues de três pinos são utilizados em aparelhos que precisam de aterramento elétrico (o terceiro pino faz essa ligação com o fio terra, evitando choques e possíveis curtos). Outra vantagem do padrão estabelecido é o formato “em poço” das tomadas. Isso dificulta o contato dos dedos com a corrente elétrica. No site do Inmetro você encontra mais informações sobre o padrão brasileiro de plugues e tomadas.
    </Text>
    <Text style={styles.subTitulo} >Amperagem e voltagem</Text>

    <Text style={styles.texto} >
    Não é apenas o plugue dos equipamentos que precisa ser compatível com a tomada. Como no Brasil alguns estados são 110V e outros 220V, é preciso ter atenção com a voltagem da instalação e dos aparelhos, uma vez que as tomadas do padrão brasileiro não são identificadas para isso. Ou seja, é muito fácil colocar aparelhos incompatíveis na tomada sem saber.
    {'\n'}{'\n'}
Outra característica importante é a amperagem. Alguns plugues podem ser de 10A e outros de 20A, de acordo com a potência dos equipamentos. Você já deve ter passado por uma situação em que tentou encaixar um aparelho na tomada e ele não entrou, ainda que os pinos fossem aparentemente compatíveis. Isso acontece pois as tomadas de 10A e de 20A são diferentes justamente para evitar que equipamentos com plugues de 20A, que possuem maior potência, sejam conectados em tomadas de 10A, com menor potência. Fique atento no momento da compra e quando for utilizar as tomadas. É possível encontrar adaptadores para esses casos também.
    </Text>

    <Text style={styles.texto} >
    Não é apenas o plugue dos equipamentos que precisa ser compatível com a tomada. Como no Brasil alguns estados são 110V e outros 220V, é preciso ter atenção com a voltagem da instalação e dos aparelhos, uma vez que as tomadas do padrão brasileiro não são identificadas para isso. Ou seja, é muito fácil colocar aparelhos incompatíveis na tomada sem saber.
    {'\n'}{'\n'}
Outra característica importante é a amperagem. Alguns plugues podem ser de 10A e outros de 20A, de acordo com a potência dos equipamentos. Você já deve ter passado por uma situação em que tentou encaixar um aparelho na tomada e ele não entrou, ainda que os pinos fossem aparentemente compatíveis. Isso acontece pois as tomadas de 10A e de 20A são diferentes justamente para evitar que equipamentos com plugues de 20A, que possuem maior potência, sejam conectados em tomadas de 10A, com menor potência. Fique atento no momento da compra e quando for utilizar as tomadas. É possível encontrar adaptadores para esses casos também.
    </Text>

    <Text style={styles.subTitulo} >Tipos de tomadas</Text>

    <Text style={styles.texto} >
    Os modelos de tomadas não variam apenas no formato do encaixe. Aqui no Brasil você vai encontrar alguns tipos de tomadas que podem ser mais adequados para o que a sua instalação precisa. Confira a seguir modelos que você pode encontrar:

    </Text>

    <Image
        style={{height:350, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t01.jpg')}  
    />
     <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t02.jpg')}  
    />
     <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t03.jpg')}  
    />
     <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t07.jpg')}  
    />
     <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t05.jpg')}  
    />
     <Image
        style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/t06.jpg')}  
    />

        <Text style={styles.texto} >
        ✓ A distância entre uma tomada e outra vai depender muito do projeto, do cômodo e das suas necessidades. Certamente você vai precisar de mais tomadas na sala do que no banheiro, por    exemplo. O mesmo vale para a altura que as tomadas serão instaladas. Consulte e converse com o profissional responsável pela instalação sobre isso.
        {'\n'}{'\n'}
✓ Confira sempre a voltagem dos equipamentos e procure saber qual a voltagem da instalação para evitar acidentes ou a queima dos aparelhos.
{'\n'}{'\n'}
✓ Tenha sempre em casa, ou na mala, pelo menos um adaptador.
{'\n'}{'\n'}
✓ Se você tiver crianças em casa, procure comprar um protetor de tomadas.
{'\n'}{'\n'}
✓ Não sobrecarregue as tomadas. Nem sempre você sabe a “força” da instalação elétrica e ao colocar muitos aparelhos na mesma tomada você pode sobrecarregá-la. Evite ligar vários aparelhos potentes no mesmo lugar, ainda que você esteja usando um “T” ou um filtro de linha. Sem exageros!
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

export default Aula24;