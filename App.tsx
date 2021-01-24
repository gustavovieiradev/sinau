import React from 'react';
import { useFonts } from 'expo-font';
import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import Login from './src/pages/Login';
import Dashboard from './src/pages/Dashboard';

export default function App() {

  const [fontsLoaded] = useFonts({
    DMSans_400Regular, 
    DMSans_500Medium, 
    DMSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Dashboard />
  );
}
