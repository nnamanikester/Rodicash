import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import DashboardFlow from './DashboardFlow';

export interface NavigationFlowProps {}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark} = useTheme();
  const {user} = useSelector((state: IRootState) => state);

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {!user.token ? <AuthenticationFlow /> : <DashboardFlow />}
    </NavigationContainer>
  );
};

export default NavigationFlow;
