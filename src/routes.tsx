import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Tabs from './components/Tabs';
import Cart from './pages/Cart';
import CourseDetail from './pages/CourseDetail';
import Author from './pages/Author';
import CourseVideo from './pages/CourseVideo';

const { Navigator, Screen } = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Tabs" component={Tabs} />
        <Screen name="Cart" component={Cart} />
        <Screen name="CourseDetail" component={CourseDetail} />
        <Screen name="Author" component={Author} />
        <Screen name="CourseVideo" component={CourseVideo} />
      </Navigator>
    </NavigationContainer>
  )
}