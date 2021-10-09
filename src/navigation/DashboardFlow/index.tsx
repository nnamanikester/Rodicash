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
import ReferAndEarnScreen from '@/screens/Dashboard/ReferAndEarnScreen';
import TransactionPinScreen from '@/screens/Dashboard/TransactionPinScreen';
import HelpScreen from '@/screens/Dashboard/HelpScreen';
import ArticleScreen from '@/screens/Dashboard/ArticleScreen';
import SavedCardsScreen from '@/screens/Dashboard/SavedCardsScreen';

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
      <Stack.Screen name="ReferAndEarn" component={ReferAndEarnScreen} />
      <Stack.Screen name="TransactionPin" component={TransactionPinScreen} />
      <Stack.Screen name="SavedCards" component={SavedCardsScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default DashboardFlow;
