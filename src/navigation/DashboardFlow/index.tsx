import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import CashoutCodeScreen from '@/screens/Dashboard/CashoutScreen/CashoutCodeScreen';

const Stack = createNativeStackNavigator();

export interface DashboardFlowProps {}

const DashboardFlow: React.FC<DashboardFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="CashoutCode" component={CashoutCodeScreen} />
    </Stack.Navigator>
  );
};

export default DashboardFlow;
