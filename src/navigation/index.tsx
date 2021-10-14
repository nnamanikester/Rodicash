import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';
import DashboardFlow from './DashboardFlow';
import {useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';

export interface NavigationFlowProps {
  setUser?: any;
}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark} = useTheme();
  const {user, token} = useSelector((state: IRootState) => state);

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      {user.email && token && user.username ? (
        <DashboardFlow />
      ) : (
        <AuthenticationFlow />
      )}
    </NavigationContainer>
  );
};

export default NavigationFlow;
