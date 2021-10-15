import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationFlow from './AuthenticationFlow';
import {useTheme} from '@/contexts/ThemeContext';
import {StatusBar} from 'react-native';
import DashboardFlow from './DashboardFlow';
import {useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import Toast from '@/components/Toast';

export interface NavigationFlowProps {
  setUser?: any;
}

const NavigationFlow: React.FC<NavigationFlowProps> = () => {
  const {isDark} = useTheme();
  const {user, token, toast} = useSelector((state: IRootState) => state);

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
        {user.email && token && user.username ? (
          <DashboardFlow />
        ) : (
          <AuthenticationFlow />
        )}
      </NavigationContainer>
      {toast.length > 0 && <Toast message={toast} />}
    </>
  );
};

export default NavigationFlow;
