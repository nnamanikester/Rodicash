import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '@/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

interface AuthenticationFlowProps {}

const AuthenticationFlow: React.FC<AuthenticationFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationFlow;
