import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '@/screens/OnboardingScreen';
import RegisterScreen from '@/screens/Authentication/RegisterScreen';
import LoginScreen from '@/screens/Authentication/LoginScreen';
import WelcomeScreen from '@/screens/Authentication/WelcomeScreen';
import EmailVerificationScreen from '@/screens/Authentication/EmailVerificationScreen';
import UsernameScreen from '@/screens/Authentication/UsernameScreen';
import CreatePinScreen from '@/screens/Authentication/CreatePinScreen';
import BVNScreen from '@/screens/Authentication/BVNScreen';
import {useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';

const Stack = createNativeStackNavigator();

export interface AuthenticationFlowProps {}

const AuthenticationFlow: React.FC<AuthenticationFlowProps> = () => {
  const {email, isVerified} = useSelector((state: IRootState) => state.user);

  return (
    <Stack.Navigator
      initialRouteName={
        email && !isVerified ? 'EmailVerification' : 'Onboarding'
      }
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
      />
      <Stack.Screen name="Username" component={UsernameScreen} />
      <Stack.Screen name="CreatePin" component={CreatePinScreen} />
      <Stack.Screen name="BVN" component={BVNScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationFlow;
