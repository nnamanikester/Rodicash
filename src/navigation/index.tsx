import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthenticationFlow from './AuthenticationFlow';

// Initalize the stack navigation
const Stack = createNativeStackNavigator();

export interface NavigationFlowProps {}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  return (
    <NavigationContainer>
      <AuthenticationFlow />
    </NavigationContainer>
  );
};

export default NavigationFlow;
