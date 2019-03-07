import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';


import Ologin from './pages/Ologin';
import Oregister from './pages/Oregister';
import Start from './pages/Start'
import Index from './pages/Index';
import AddBuilding from './pages/AddBuilding';
import Payment1 from './pages/Payment1';
import Payment2 from './pages/Payment2';
import Payment3 from './pages/Payment3';
import Payment4 from './pages/Payment4';
import Settings  from'./pages/Settings';
import DashBoard from './pages/DashBoard';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			
			    <Stack key="root" hideNavBar={true}>
			    <Scene key="start" component={Start} title="Start" initial={true}/>
			      <Scene key="ologin" component={Ologin} title="Ologin" />
			      <Scene key="oregister" component={Oregister} title="Oregister"/>
			   	  
			   	  <Scene key="index" component={Index} title="try"/>
			   	  <Scene key="addbuilding" component={AddBuilding} title="add"/>
			   	
			   	<Scene key="pay1" component={Payment1} title="Payment1"/>
			    <Scene key="pay2" component={Payment2} title="Payment2" />
			    <Scene key="pay3" component={Payment3} title="Payment3"/>
	       	    <Scene key="pay4" component={Payment4} title="Payment4"/>
			   	
			    </Stack>
			 </Router>
			)
	}
}