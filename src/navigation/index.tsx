import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';

// Initalize the stack navigation
const Stack = createNativeStackNavigator();

export interface NavigationFlowProps {}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {colors, isDark} = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <AuthenticationFlow />
    </NavigationContainer>
  );
};

export default NavigationFlow;
