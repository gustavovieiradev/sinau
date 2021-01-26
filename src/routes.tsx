import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tabs from './components/Tabs';

const { Navigator, Screen } = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Tabs" component={Tabs} />
      </Navigator>
    </NavigationContainer>
  )
}