import {NavigationContainer} from '@react-navigation/native'
import { View, StatusBar } from 'react-native';

import { Routes } from './src/routes/index';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
       < Routes />
      <StatusBar backgroundColor='#131313' barStyle='light-content'/>
      </AuthProvider>
    </NavigationContainer>
  
  );
}


