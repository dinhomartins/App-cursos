import * as React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Header({ navigation }) {
    return (
      <View style={styles.container}>

        <View  style={styles.boxMenu} title="Go to Details... again">
            <View style={styles.contentBoxMenuLeft} >
                  <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Home')}
              />
            <Image
            style={styles.icone}
            source={require('../../../assets/eletricista.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Eletricista Residencial</Text>
            </View>

        </View >

        <View style={styles.boxMenu}>
            <View style={styles.contentBoxMenuLeft}>
            
            <Image
            style={styles.icone}
            source={require('../../../assets/eletricista.png')}  />
           
            </View>

            <View style={styles.contentBoxMenu}>
            <Text style={styles.textoBoxMenu} >Instalação e {'\n'}manutenção de {'\n'}ar condicionado split</Text>
            </View>

        </View >

        <View style={styles.boxMenu}>
            <Text >1</Text>
        </View >
        <View style={styles.boxMenu}>
            <Text >1</Text>
        </View >
        <View style={styles.boxMenu}>
            <Text >1</Text>
        </View >
        <View style={styles.boxMenu}>
            <Text >1</Text>
        </View >
        <View style={styles.boxMenu}>
            <Text >1</Text>
        </View >
       
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#eaeaea',
      flexDirection: 'row',
      justifyContent: 'center',
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
    icone:{
      width: 45,
      height: 45
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
      width: '20%',

    }
   
  });
  

  export default Header;