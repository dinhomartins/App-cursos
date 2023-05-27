import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';



function Aula06({ navigation }) {
 return (
   <ScrollView style={styles.scrollView} >
    <View style={styles.container} >
    <Text style={styles.titulo} >Disjuntores</Text>

    <Image
        style={{height:450, width: '100%', marginTop:20, marginBottom:20}}
        source={require('../../../../assets/disjuntores.jpg')}  
    />


    <Text style={styles.subTitulo} >O que é um disjuntor e qual sua aplicação?</Text>
    <Text style={styles.texto} >
    Os disjuntores são facilmente encontrados por todas as instalações elétricas, sejam elas residenciais, prediais ou industriais. Então não importa qual seja, pois sempre haverá no mínimo um disjuntor! Mas afinal, você sabe o que é um disjuntor e para que serve um disjuntor? Existem muitos tipos de disjuntores, portanto mostraremos tudo sobre disjuntores, o que é e qual a aplicação de um disjuntor, as características dos disjuntores e os tipos de disjuntores.

    {'\n'}{'\n'}

      No mercado há vários tipos de multímetros e que possuem as mais diversão funções, desde as mais básicas até as mais complexas. Alguns modelos podem medir indutância, frequência e temperatura, por exemplo.

      </Text>

          <Image
              style={{height:150, width: '100%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/disjuntor.jpg')}  />

      <Text style={styles.subTitulo} >O que é disjuntor e qual a função do disjuntor?</Text>

      <Text style={styles.texto} >
      O disjuntor é um dispositivo eletromecânico que tem a função de proteger as instalações elétricas, ou seja, assim que a corrente elétrica que passa por ele ultrapassa o seu valor nominal, ele interrompe o circuito impedindo o fornecimento de energia para as cargas do circuito, evitando assim que elas e o circuito danifiquem.
      {'\n'}{'\n'}
      Para exemplificar e explicar de uma maneira bem simples e direta, o disjuntor é basicamente como um interruptor automático, e assim que ele identifica um valor de corrente elétrica que ele foi projetado para acionar, o mesmo secciona (abre) o circuito em que ele foi instalado.

      {'\n'}{'\n'}
      O disjuntor atuará todas as vezes que houver pico de corrente, sobrecarga e curto-circuito, mas é importante destacar que para todos os disjuntores funcionarem corretamente é fundamental haver o correto dimensionamento do circuito e dos componentes.
      </Text>

      <Text style={styles.subTitulo} >Quais são os tipos de disjuntores?</Text>

      </View>


      <Text style={styles.texto} >
      Como sabemos, existem diversos tipos e modelos de disjuntores, embora sejam distintos, eles têm o mesmo princípio de funcionamento e a mesma finalidade, que é a proteção dos circuitos contra sobrecorrente e curto-circuito. Sendo o que vai diferenciá-los são as suas curvas características e onde serão aplicados. Tudo isso é determinado de acordo com a carga e circuitos que estão sendo alimentados como por exemplo, se são motores, ar condicionado, máquinas elétricas, disjuntores gerais e se o circuito é monofásico, bifásico ou trifásico. Abaixo seguem alguns tipos e modelos de disjuntores:
      </Text>

      <Text style={styles.subTitulo} >Disjuntor magnético</Text>
      <Image
              style={{height:300, width: '50%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/d1.jpg')}  />
        
      <Text style={styles.texto} >
      Os disjuntores magnéticos também possuem a mesma função que as dos demais disjuntores que é proteger os equipamentos elétricos contra sobrecargas e curtos-circuitos, porém eles possuem uma precisão maior para detectar o valor da corrente elétrica.
      </Text>

      <Text style={styles.subTitulo} >Disjuntores termomagnéticos</Text>
              <Image
              style={{height:250, width: '100%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/d2.jpg')} 
              />

      <Text style={styles.texto} >
      Já os disjuntores termomagnéticos é basicamente a junção da proteção térmica e magnética, sendo instalados atualmente nas instalações residenciais e comerciais. Ele possui as vantagens de poder ser usado para manobras de ligar e desligar os circuitos, proteção contra aquecimentos, curtos circuitos e sobrecargas.
      {'\n'}{'\n'}
      O disjuntor monopolar é utilizado em instalações e circuitos que possuem apenas uma única fase como por exemplo, circuitos de iluminação e tomadas em sistemas monofásicos fase/neutro, seja com fase 127V ou 220V. O disjuntor bipolar é usado em circuitos ou instalações com duas fases, como circuitos com chuveiros, torneiras elétricas ou equipamentos de maior potência. Já o disjuntor tripolar é indicado para instalações e circuitos com três fases, como circuitos com motores elétricos trifásicos. Existem os disjuntores de alta tensão que são os indicados para grandes potências, que alcançam altos valores de corrente elétrica.
      {'\n'}{'\n'}
      Além dos diversos tipos e modelos de disjuntores, eles ainda se dividem em três categorias devido à curva característica de cada modelo. Isso é importante para definir a aplicação de cada um e as cargas em que eles serão ligados. As curvas de disjuntores são B, C e D, lembrando que devido à corrente elétrica ser dada em ampere (A), não existe curva característica com letra A, para não ter confusão.

      </Text>

      <Text style={styles.subTitulo} >Disjuntor térmico</Text>
      <Image
              style={{height:300, width: '50%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/d1.jpg')}  />
        
      <Text style={styles.texto} >
      Os disjuntores magnéticos também possuem a mesma função que as dos demais disjuntores que é proteger os equipamentos elétricos contra sobrecargas e curtos-circuitos, porém eles possuem uma precisão maior para detectar o valor da corrente elétrica.
      </Text>

      <Text style={styles.subTitulo} >Disjuntores termomagnéticos</Text>
              <Image
              style={{height:300, width: '50%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/d3.jpg')} 
              />

      <Text style={styles.texto} >
      Sendo acionados de uma maneira diferente em relação aos demais componentes, os disjuntores térmicos interrompem o circuito elétrico assim que detectam uma elevação da temperatura, que seja anormal. Esse tipo de disjuntor é bastante utilizado como precaução contra incêndios.
      </Text>

    <Text style={styles.subTitulo} >Tipos de disjuntores</Text>

    <Text style={styles.texto} >
        Em geral, os disjuntores comerciais mais comuns são termomagnéticos, e construídos de acordo com as normas técnicas NEMA ou DIN.
        {'\n'}{'\n'}
        No Brasil, os modelos NEMA são cada vez menos utilizados, devido a vários motivos, principalmente à sua baixa eficiência.
        {'\n'}{'\n'}
        Já os modelos DIN utilizam uma tecnologia mais moderna, que proporciona alta eficiência na proteção e um tamanho compacto, quando comparados aos disjuntores padrão NEMA.
      </Text>

      <Text style={styles.subTitulo} >Aplicação dos disjuntores</Text>

      <Text style={styles.texto} >
      A proteção oferecida pelos disjuntores somente será eficaz se estes dispositivos forem especificados corretamente. E para isto, temos que considerar, no mínimo, os seguintes requisitos:
      </Text>

      <Image
              style={{height:280, width: '100%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/djdimnema.jpg')} 
              />

      <Text style={styles.texto} >
      1) Curva de atuação. Esta característica depende do circuito que será protegido. As mais comuns são as curvas B e C.
      {'\n'}{'\n'}
      Os disjuntores curva B são utilizados em circuitos com cargas resistivas. Por exemplo: aquecedores, chuveiros, fornos e torneiras elétricas.
      Já os disjuntores curva C são indicados para cargas indutivas e motores, além dos circuitos de tomadas de uso geral e específico. Portanto, são apropriados para aparelhos de ar condicionado, máquinas de lavar roupas, fornos micro-ondas, circuitos de iluminação, entre outros.
      {'\n'}{'\n'}
      2) Número de polos. É definido de acordo com o número de condutores fase (“vivos”) do circuito a ser protegido. Em geral, os disjuntores podem ser:
      {'\n'}{'\n'}
      Monopolares. Também conhecidos como disjuntores unipolares ou disjuntores monofásicos, são utilizados em circuitos de iluminação e tomadas com fase e neutro, onde ligam e desligam apenas a fase, pois o neutro aterrado não representa perigo.
      {'\n'}{'\n'}
      Bipolares. Os modelos bipolares, também conhecidos como disjuntores duplos ou bifásicos, são utilizados com frequência em chuveiros elétricos e outros circuitos energizados com duas fases, pois nesse caso, precisam ser interrompidas simultaneamente.
      {'\n'}{'\n'}
      Tripolares. Os disjuntores tripolares ou trifásicos são utilizados em circuitos alimentados com três fases, geralmente em redes de 220V ou 380V, permitindo ligar e desligar todas através de uma só alavanca.
      {'\n'}{'\n'}
      3) Corrente nominal (“amperagem”).  Em geral, são encontrados modelos de 4A até 63A. O valor ideal é escolhido de acordo com a capacidade do equipamento ou circuito a ser protegido e a bitola (“grossura”) dos cabos (fios) utilizados.
      {'\n'}{'\n'}
      Por exemplo, em certas condições, um circuito de iluminação pode utilizar um disjuntor de 16A, para proteger um cabo de 1,5mm2. Já no caso de um chuveiro, é comum o uso de disjuntores de 40A, para proteger cabos de 6mm2.
      {'\n'}{'\n'}
      4) Capacidade de interrupção. Podemos dizer que é o “tamanho do curto-circuito” que o disjuntor consegue desligar com segurança. Nos modelos residenciais, normalmente é de 3000A (3KA). Porém existem capacidades maiores, para utilização nos projetos elétricos que assim necessitarem.
      {'\n'}{'\n'}
      Também é importante saber que a especificação dos disjuntores deverá ser feita por profissionais qualificados, seguindo um projeto elétrico com base na norma ABNT NBR 5410 (Instalações elétricas de baixa tensão), para assegurar que os requisitos mínimos de proteção sejam atendidos. 
            </Text>

            <Image
              style={{height:280, width: '100%', marginTop:20, marginBottom:20}}
              source={require('../../../../assets/djinfor.jpg')} 
              />

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

export default Aula06;