import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '@/screens/OnboardingScreen';
import RegisterScreen from '@/screens/Authentication/RegisterScreen';
import LoginScreen from '@/screens/Authentication/LoginScreen';
import WelcomeScreen from '@/screens/Authentication/WelcomeScreen';

const Stack = createNativeStackNavigator();

export interface AuthenticationFlowProps {}

const AuthenticationFlow: React.FC<AuthenticationFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationFlow;
