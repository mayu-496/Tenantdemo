/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  AsyncStorage,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Routes from './src/Routes';

export default class App extends Component<{}> {

 /* compoundDidMount()
      {
        this._loadInitialState();
      }

      _loadInitialState = async () => 
        {
          var value = await AsyncStorage.getItem('user');
          if( value !== null)
          {
            Actions.home();
          }
        }
*/

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});