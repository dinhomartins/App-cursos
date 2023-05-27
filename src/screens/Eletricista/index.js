import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native';
const bg = {uri: 'https://i0.wp.com/s3.sa-east-1.amazonaws.com/static.inbep.com.br/wp-content/uploads/2022/10/17154128/image-2-e1666032133196.png?resize=600%2C370&ssl=1'};


function Eletricista({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View  style={styles.capaScreen}>

        <ImageBackground source={bg} resizeMode="cover" style={styles.capa}>
        </ImageBackground>
        </View>
        <Text style={styles.titulo} >Eletricista residencial e predial</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Home')}
        /> */}
        {/* Aula 01 */}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula01')}>
          <Text style={styles.tituloAula} >Aula 01</Text>
          <Text style={styles.conteudoAula}>Conceitos elétricos</Text>
        </TouchableOpacity>

        {/* Aula 02 */}
        <TouchableOpacity style={styles.boxAula } onPress={() => navigation.navigate('Aula02')} >
          <Text style={styles.tituloAula} >Aula 02</Text>
          <Text style={styles.conteudoAula}>Ferramentas para eletricista essenciais para a execução do trabalho</Text>
        </TouchableOpacity>

        {/* Aula 03 */}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula03')} >
          <Text style={styles.tituloAula} >Aula 03</Text>
          <Text style={styles.conteudoAula}>Alicate amperimetro</Text>
        </TouchableOpacity>


        {/* Aula 04 */}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula04')}>
          <Text style={styles.tituloAula} >Aula 04</Text>
          <Text style={styles.conteudoAula}>Medindo tensões elétricas</Text>
        </TouchableOpacity>

         {/* Aula 05*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula05')}>
          <Text style={styles.tituloAula} >Aula 05</Text>
          <Text style={styles.conteudoAula}>Cores dos cabos</Text>
        </TouchableOpacity>

         {/* Aula 06*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula06')}>
          <Text style={styles.tituloAula} >Aula 06</Text>
          <Text style={styles.conteudoAula}>Disjuntores</Text>
        </TouchableOpacity>

         {/* Aula 07*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula07')}>
          <Text style={styles.tituloAula} >Aula 07</Text>
          <Text style={styles.conteudoAula}>QDC - Quadro de distribuição</Text>
        </TouchableOpacity>

         {/* Aula 08*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula08')}>
          <Text style={styles.tituloAula} >Aula 08</Text>
          <Text style={styles.conteudoAula}>QDC - Quadro de distribuição</Text>
        </TouchableOpacity>

         {/* Aula 09*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula09')}>
          <Text style={styles.tituloAula} >Aula 09</Text>
          <Text style={styles.conteudoAula}>DPS - dispositivos de proteção contra surtos</Text>
        </TouchableOpacity>

           {/* Aula 10*/}
           <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula10')}>
          <Text style={styles.tituloAula} >Aula 10</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Monofasico</Text>
        </TouchableOpacity>

         {/* Aula 11*/}
         <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula11')}>
          <Text style={styles.tituloAula} >Aula 11</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Bifasico</Text>
        </TouchableOpacity>

          {/* Aula 12*/}
          <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula12')}>
          <Text style={styles.tituloAula} >Aula 12</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Trifasico</Text>
        </TouchableOpacity>

        {/* Aula 13*/}
        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula13')}>
          <Text style={styles.tituloAula} >Aula 13</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Trifasico sem IDR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula14')}>
          <Text style={styles.tituloAula} >Aula 14</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Trifasico com IDR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula15')}>
          <Text style={styles.tituloAula} >Aula 15</Text>
          <Text style={styles.conteudoAula}>Diagrama QDC Trifasico- IDR - DPS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula16')}>
          <Text style={styles.tituloAula} >Aula 16</Text>
          <Text style={styles.conteudoAula}>Curva dos Disjuntores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula17')}>
          <Text style={styles.tituloAula} >Aula 17</Text>
          <Text style={styles.conteudoAula}>Disjuntor Motor</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula18')}>
          <Text style={styles.tituloAula} >Aula 18</Text>
          <Text style={styles.conteudoAula}>Diagrama - Interrupr Simples</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula19')}>
          <Text style={styles.tituloAula} >Aula 19</Text>
          <Text style={styles.conteudoAula}>Diagrama - Interrupr 2 e 3 Vias</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula20')}>
          <Text style={styles.tituloAula} >Aula 20</Text>
          <Text style={styles.conteudoAula}>Three Way</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula21')}>
          <Text style={styles.tituloAula} >Aula 21</Text>
          <Text style={styles.conteudoAula}>Four Way</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula22')}>
          <Text style={styles.tituloAula} >Aula 22</Text>
          <Text style={styles.conteudoAula}>Circuito de tomada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula23')}>
          <Text style={styles.tituloAula} >Aula 23</Text>
          <Text style={styles.conteudoAula}>Circuito de tomada conjugado com iluminação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula24')}>
          <Text style={styles.tituloAula} >Aula 24</Text>
          <Text style={styles.conteudoAula}>Padrão de tomadas brasileiro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula25')}>
          <Text style={styles.tituloAula} >Aula 25</Text>
          <Text style={styles.conteudoAula}>Tipos de tomadas mais utilizados no mundo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula26')}>
          <Text style={styles.tituloAula} >Aula 26</Text>
          <Text style={styles.conteudoAula}>Relé Fotoelétrico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula27')}>
          <Text style={styles.tituloAula} >Aula 27</Text>
          <Text style={styles.conteudoAula}>Boia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula28')}>
          <Text style={styles.tituloAula} >Aula 28</Text>
          <Text style={styles.conteudoAula}>Ligando Chuveiro Eletrica</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxAula} onPress={() => navigation.navigate('Aula29')}>
          <Text style={styles.tituloAula} >Aula 29</Text>
          <Text style={styles.conteudoAula}>Ligando Chuveiro Eletrica</Text>
        </TouchableOpacity>


      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center'
    },
    capaScreen:{
      height: 200,
      width:'100%'
    },
    capa:{
      height:200,
      width: '100%'
    },
    titulo:{
      fontSize: 24,
      paddingBottom:20,
      paddingTop:20,
      textAlign: 'center'
    },
    boxAula:{
      width: '90%',
      height: 120,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1F9EAF',
      marginBottom: 20
    },
    tituloAula:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
    },
    conteudoAula:{
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      margin: 10
    }
    

  })

  export default Eletricista;