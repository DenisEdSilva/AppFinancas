import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';


LogBox.ignoreAllLogs(true);
export default function AppFinancas() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#131313' barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}