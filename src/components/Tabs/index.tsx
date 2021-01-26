import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../TabBar';
import Dashboard from '../../pages/Dashboard';
import Search from '../../pages/Search';
import MyCourse from '../../pages/MyCourse';
import Account from '../../pages/Account';

const { Navigator, Screen } = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Navigator tabBar={props => <TabBar {...props} />}>
			<Screen name="Dashboard" component={Dashboard}/>
			<Screen name="Search" component={Search} />
			<Screen name="MyCourse" component={MyCourse} />
			<Screen name="Account" component={Account} />
		</Navigator>
  )
}