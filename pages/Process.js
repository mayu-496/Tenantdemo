import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';


import Payment1 from './pages/Payment1';
import Payment2 from './pages/Payment2';
import Payment3 from './pages/Payment3';
import Payment4 from './pages/Payment4';

export default class Process extends Component <{}>{
	render() {
		return(
			<Router>
			
			    <Stack key="root" hideNavBar={true}>
			    <Scene key="pay1" component={Payment1} title="Payment1" initial={true}/>
			    <Scene key="pay2" component={Payment2} title="Payment2" />
			    <Scene key="pay3" component={Payment3} title="Payment3"/>
	       	    <Scene key="pay4" component={Payment4} title="Payment4"/>
			   	  
			    </Stack>
			 </Router>
			)
	}
}