import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';

export interface NavigationFlowProps {}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark} = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <AuthenticationFlow />
    </NavigationContainer>
  );
};

export default NavigationFlow;
