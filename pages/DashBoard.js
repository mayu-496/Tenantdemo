import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, 
  Alert,
  Dimensions,
  ScrollView
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardViewWithIcon } from "react-native-simple-card-view";


export default  class DashBoard extends Component{

  render() {
    const miniCardStyle = {
    shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius       : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
  return (
    
    
    <View style={styles.container}>
        
          <Text style= {styles.welcome}> your buildings are displayed here </Text>
         <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
             <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
           
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 2' }
            contentFontSize={ 20 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
            
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iconHeight={ 40 }
            iconColor={ '#333' }
            title={ 'Building 3' }
            contentFontSize={ 10 }
            titleFontSize={ 16 }
            style={ miniCardStyle }
           
          />

        
         </View>

      
        
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Add Building" onPress={Actions.addbuilding}>
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item onPress={Actions.addtenant} buttonColor='#3498db' title="Add Tenant">
            <Icon name="md-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="View Tenant" onPress={() => console.log("notes tapped!")}>
            <Icon name="md-list" style={styles.actionButtonIcon} />
          </ActionButton.Item>
           <ActionButton.Item buttonColor='#f4427d' title="Payments" onPress={Actions.pay1}>
            <Icon name="md-cash" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
   
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0EC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  
});

