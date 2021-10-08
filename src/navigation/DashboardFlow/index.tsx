import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import CashoutCodeScreen from '@/screens/Dashboard/CashoutScreen/CashoutCodeScreen';
import ConfirmCashout from '@/screens/Dashboard/CashoutScreen/ConfirmCashout';
import TransactionReceipt from '@/screens/Dashboard/CashoutScreen/TransactionReceiptScreen';
import AddMoneyScreen from '@/screens/Dashboard/AddMoneyScreen';
import NotificationsScreen from '@/screens/Dashboard/NotificationsScreen';
import PersonalInfoScreen from '@/screens/Dashboard/PersonalInfoScreen';
import ResetPasswordScreen from '@/screens/Dashboard/ResetPasswordScreen';
import TransactionReportScreen from '@/screens/Dashboard/TransactionReportScreen';

const Stack = createNativeStackNavigator();

export interface DashboardFlowProps {}

const DashboardFlow: React.FC<DashboardFlowProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="CashoutCode" component={CashoutCodeScreen} />
      <Stack.Screen name="ConfirmCashout" component={ConfirmCashout} />
      <Stack.Screen name="TransactionReceipt" component={TransactionReceipt} />
      <Stack.Screen name="AddMoney" component={AddMoneyScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen
        name="TransactionReport"
        component={TransactionReportScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardFlow;
