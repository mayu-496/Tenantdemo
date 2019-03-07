import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TextInput,
  TouchableOpacity ,
  Image,

} from 'react-native';

import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';

export default class Start extends Component<{}> {
  

  
  render() {
    return(
      <View style={styles.container}>  
 <Logo/>
                   <TouchableOpacity
                    onPress={Actions.ologin}>
                    <Text style={styles.buttonText}>OWNER</Text>
                     <Image
               source={require('../images/tenant1.jpeg')}
               style={styles.image}
               />

                     
                  </TouchableOpacity>

                 <TouchableOpacity
                    onPress={Actions.ologin}>
                    <Text style={styles.buttonText}>TENANT</Text>
                     <Image
               source={require('../images/tenant1.jpeg')}
               style={styles.image}
               />

                     
                  </TouchableOpacity>
      </View>    
          );
        }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',

  },
   buttonText: {
    fontSize:20,
    fontWeight:'500',
    color:'#02edd5',
    textAlign:'center',
    fontWeight: 'bold',
  },
  image:{
    height:150,
    width:150,
    marginVertical:20,

  }

});