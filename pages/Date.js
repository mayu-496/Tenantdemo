import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,Dimensions} from 'react-native';
import { CardViewWithIcon } from "react-native-simple-card-view";
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
        github       : 0,
      }
    )
  }

  render() {
    const miniCardStyle = {shadowColor       : '#000000',
    shadowOffsetWidth : 2,
    shadowOffsetHeight: 2,
    shadowOpacity     : 0.1,
    hadowRadius      : 5,
    bgColor           : '#ffffff',
    padding           : 5,
    margin            : 5,
    borderRadius      : 3,
    elevation         : 3,
    width             : (Dimensions.get("window").width / 2) - 10
    };
    return (
      <View style={ styles.container }>
        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Building 1' }
            contentFontSize={ 20 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
            content={ this.state.github.toString() }
            onPress={ () => this.setState({
                     github       : this.state.github + 1
            }) }
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'Building 2' }
            contentFontSize={ 20 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
            content={ this.state.github.toString() }
            onPress={ () => this.setState({
                     github       : this.state.github + 1
            }) }
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'md-home' }
            iosIcon={ 'logo-youtube' }
            iconHeight={ 30 }
            iconColor={ '#ff0000' }
            title={ 'Building 3' }
            contentFontSize={ 10 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
            content={ this.state.github.toString() }
            onPress={ () => this.setState({
                     github       : this.state.github + 1
            }) }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex           : 2, 
    alignItems     : 'center',
    backgroundColor: '#F5FCFF',
    paddingTop     : 25,
  },
  
});
