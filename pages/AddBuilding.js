import React, { Component } from 'react';
import { Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Header
} from 'react-native';



export default class AddBuilding extends Component<{}> {
 

	render() {
   
		return(
			 <View style = {styles.container}>
            
            <TextInput 
               
               placeholder = "Building Name"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />
            
            <TextInput 
               
               placeholder = "No of Flats"
               
               underlineColorAndroid="black"
               style={styles.textInput}
              
               />

               <TextInput 
               
               placeholder = "Address Line 1"
               
               underlineColorAndroid="black"
               style={styles.textInput}
              
               />

               <TextInput 
               
               placeholder = "Address Line 2"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "City"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "State"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "Country"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />

               <TextInput 
               
               placeholder = "Pin Code"
               
               underlineColorAndroid="black"
               style={styles.textInput}
               
               />
            <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Create</Text>
           </TouchableOpacity>
           
         </View>
			);
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#E0F0EC',
    flex: 1,
    margin :20,
  
    
  },
  
  
   textInput:{
    height:40,
    fontSize : 18,
    paddingLeft :20,
    marginVertical: 10,
   },
   button: {
    width:300,
    backgroundColor:'#02edd5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
   title:{
    backgroundColor:'#02edd5',
    fontSize:20,
    textAlign:'center',
    padding:18
  },
});

 