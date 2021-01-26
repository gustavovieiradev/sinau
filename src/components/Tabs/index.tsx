import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../TabBar';
import Dashboard from '../../pages/Dashboard';
import Search from '../../pages/Search';
import MyCourse from '../../pages/MyCourse';
import Account from '../../pages/Account';
import { createStackNavigator } from '@react-navigation/stack';
import SearchResult from '../../pages/SearchResult';

const { Navigator, Screen } = createBottomTabNavigator();
 
const SearchStack = createStackNavigator();

function SearchStackScreen() {
	return (
		<SearchStack.Navigator screenOptions={{ headerShown: false}}>
			<SearchStack.Screen name="Search" component={Search} />
			<SearchStack.Screen name="SearchResult" component={SearchResult} />
		</SearchStack.Navigator>
	)
}

export default function Tabs() {
  return (
    <Navigator tabBar={props => <TabBar {...props} />}>
			<Screen name="Dashboard" component={Dashboard}/>
			<Screen name="Search" component={SearchStackScreen} />
			<Screen name="MyCourse" component={MyCourse} />
			<Screen name="Account" component={Account} />
		</Navigator>
  )
}