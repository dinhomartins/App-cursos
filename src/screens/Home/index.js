import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
function HomeScreen({ navigation }) {
    return (
      <ScrollView>
        <StatusBar style="dark" />
      <View style={styles.container}>

       
      <View style={styles.containerTopoContent} >  
      
        <View style={styles.containerTopo}>
            <Text style={styles.textoColor} >Cursos {'\n'}Profissionalizantes</Text>
        </View>
        <Text style={styles.tituloHome} >Área de atuação</Text>
        </View>
        

        <View style={styles.areaDeAtuacao} >
          
          <View style={styles.containerCirculo}>
          <View style={styles.circulo}>
          <Image
            style={styles.iconeCirculo}
            source={require('../../../assets/eletric.png')}  />
          </View>
          <Text style={styles.textoCirculo}>
              Eletricista
          </Text>

          
        </View>
        <View style={[styles.containerCirculo, styles.alinhamentoTop]}>
        
        <View style={styles.circulo}>
        <Image
            style={styles.iconeCirculo}
            source={require('../../../assets/comando.png')}  />
        </View>
        <Text  style={styles.textoCirculo}>
            Comando
        </Text>
    </View>

    <View style={styles.containerCirculo}>
        <View style={styles.circulo}>
        <Image
            style={styles.iconeCirculo}
            source={require('../../../assets/air2.png')}  />
        </View>
        <Text  style={styles.textoCirculo}>
           Ar Cond
        </Text>
    </View>

    <View style={styles.containerCirculo}>
        <View style={styles.circulo}>
        <Image
            style={styles.iconeCirculo}
            source={require('../../../assets/free2.png')}  />
        </View >
        <Text  style={styles.textoCirculo}>
            Geladeira
        </Text>
    </View>


        </View>

        <View style={styles.faixaCursosDisponiveis} >
        <Text style={styles.tituloHome} >Cursos Disponiveis</Text>
        </View>
      

    

    

    

        <TouchableOpacity  style={[styles.boxMenu, styles.shadowProp]} onPress={() => navigation.navigate('Eletricista')}>
            <View style={styles.contentBoxMenuLeft} >
                  
            <Image
            style={styles.icone}
            source={require('../../../assets/eletricista.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Eletricista Residencial</Text>
            </View>

        </TouchableOpacity >

        <View style={styles.boxMenu}>
            <View style={styles.contentBoxMenuLeft}>
            
            <Image
            style={styles.icone}
            source={require('../../../assets/air.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Instalação e {'\n'}manutenção de {'\n'}ar condicionado split</Text>
            </View>

        </View >

        <View style={styles.boxMenu}>
            <View style={styles.contentBoxMenuLeft}>
            
            <Image
            style={styles.icone}
            source={require('../../../assets/freezer.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Manutenção de {'\n'}Geladeira</Text>
            </View>

        </View >

        <View style={styles.boxMenu}>
            <View style={styles.contentBoxMenuLeft}>
            
            <Image
            style={styles.icone}
            source={require('../../../assets/lavar.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Manutenção de {'\n'}Maquina de lavar</Text>
            </View>

        </View >
       
      </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignContent: 'center',
      flexWrap: 'wrap'
    },
    boxMenu: {
        width: '95%', 
        height: 96, 
        backgroundColor: '#f5f5f5',
        margin: 5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    tituloHome:{
      fontSize: 22,
      fontWeight: 700,
      marginLeft: 20,
      marginTop: 10
    },
    icone:{
      width: 80,
      height: 80
    },
    iconeCirculo:{
      width: 40,
      height: 40
    },
    textoBoxMenu:{
      fontSize: 18
    },
    contentBoxMenu:{
      width: '70%',
      flexWrap: 'wrap',
      maxWidth: 200 
    },
    contentBoxMenuLeft:{
      width: '30%',

    },
    containerCirculo:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,

  },
  faixaCursosDisponiveis:{
    width: '100%',
    marginBottom: 20
  },
  circulo: {
      width: 70, 
      height:70, 
      backgroundColor: '#1F9EAF',
      margin: 5,
      borderRadius: 50,
      alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
      
  },
  textoCirculo:{
      textAlign: 'center'
  },
  containerTopo: {
    height: 150,
    width: '100%',

    backgroundColor: '#1F9EAF',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'

},
  containerTopoContent:{
    flexDirection: 'column',
     width:'100%'
    
  },
  areaDeAtuacao:{
    height: 150,
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  alinhamentoTop:{
    marginTop: 10
  },
  textoColor:{
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 70
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.5,  
    shadowRadius: 3,  
  }
   
  });
  

  export default HomeScreen;

