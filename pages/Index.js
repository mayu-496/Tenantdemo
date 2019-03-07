import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene, Stack} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import Home from './Home';
import DashBoard from './DashBoard';
import Notification from './Notification';
import AddBuilding from './AddBuilding';
import TenantDetails from './TenantDetails';
import Payment1 from './Payment1';
import Payment2 from './Payment2';
import Payment3 from './Payment3';
import Payment4 from './Payment4';
import Settings  from'./Settings';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const Index = () => {
  return (
    <Router hideNavBar={true}>
      {/* Tab Container */}
      <Scene key="root" hideNavBar={true}>
          <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }}>
            {/* Tab and it's scenes */}
            <Scene icon={TabIcon} key="home" component={Home} title="Home"  />
            <Scene key="db" icon={TabIcon} component={DashBoard} title="Dash Board" back={true}/>
            <Scene key="no" icon={TabIcon} component={Notification} title="Notification" back={true}/>
            <Scene key="set" title="Settings" icon={TabIcon} component={Settings} title="Settings" back={true} />
          </Scene>
          
          {/* Owner Pages */}
          <Scene key="index" component={Index} title="try"/>
          <Scene key="addbuilding" component={AddBuilding} title="Add Building" back={true} hideNavBar={false}/>
          <Scene key="addtenant" component={TenantDetails} title="Add Tenant" back={true} hideNavBar={false}/>
          <Scene key="pay1" component={Payment1} title="Payment" back={true} hideNavBar={false}/>
          <Scene key="pay2" component={Payment2} title="Payment"  back={true} hideNavBar={false}/>
          <Scene key="pay3" component={Payment3} title="Payment" back={true} hideNavBar={false}/>
          <Scene key="pay4" component={Payment4} title="Payment" back={true} hideNavBar={false}/>
        </Scene>
    </Router>


  );
}

export default Index;
