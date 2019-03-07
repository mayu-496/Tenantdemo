import React,{Component} from 'react';
import {Text,
	TextInput,
	View,
	StyleSheet,
}

export default class AddTenant extends Component{

	render(){
		return(
				<View style={styles.container}>
					 <TextInput 
			            placeholder = "First Name"       
			            underlineColorAndroid="black"
			            style={styles.textInput}
			          />
            
		            <TextInput 
		               placeholder = "Email"
		               underlineColorAndroid="black"
		               style={styles.textInput}
		             />

		             <TextInput 
		               placeholder = "Phone"
		               underlineColorAndroid="black"
		               style={styles.textInput}
		             />

				</View>
			
			);
	}
}

const styles= StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#E0F0EC',

	}
});