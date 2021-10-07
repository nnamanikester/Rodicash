import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@/contexts/ThemeContext';
import HomeScreen from '@/screens/Dashboard/HomeScreen';
import SVG from '@/components/SVG';
import * as UI from '@/components/common';
import styles from './styles';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import TransactionScreen from '@/screens/Dashboard/TransactionScreen';
import CashoutScreen from '@/screens/Dashboard/CashoutScreen';
import MoreScreen from '@/screens/Dashboard/MoreScreen';
import MapScreen from '@/screens/Dashboard/MapScreen';

const Tab = createBottomTabNavigator();

export interface BottomNavigationProps {}

const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="CashoutTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F6F9FC',
          elevation: 0,
          borderTopWidth: 0,
          height: hd('7%'),
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                focused && {...styles.tabActive, borderColor: colors.green2},
              ]}>
              <SVG
                containerStyle={{opacity: 1}}
                name="home"
                size={30}
                color={focused ? colors.primary : colors.gray3}
                fill={focused ? colors.green2 : colors.gray3}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="TransactionsTab"
        component={TransactionScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                focused && {...styles.tabActive, borderColor: colors.green2},
              ]}>
              <SVG
                containerStyle={{opacity: 1}}
                name="transactions"
                color={focused ? colors.primary : colors.gray3}
                fill={focused ? colors.green2 : colors.gray3}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="CashoutTab"
        component={CashoutScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[styles.tab, styles.centerTab]}
              center
              backgroundColor={
                focused ? `${colors.primary}20` : `${colors.secondary}20`
              }>
              <SVG
                containerStyle={{opacity: 1}}
                name="cashout"
                color={focused ? colors.primary : colors.secondary}
                fill={focused ? colors.green2 : colors.orange2}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                focused && {...styles.tabActive, borderColor: colors.green2},
              ]}>
              <SVG
                containerStyle={{opacity: 1}}
                name="map"
                color={focused ? colors.primary : colors.gray3}
                fill={focused ? colors.green2 : colors.gray3}
              />
            </UI.Block>
          ),
        }}
      />
      <Tab.Screen
        name="MoreTab"
        component={MoreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <UI.Block
              style={[
                styles.tab,
                focused && {...styles.tabActive, borderColor: colors.green2},
              ]}>
              <SVG
                containerStyle={{opacity: 1}}
                name="more"
                color={focused ? colors.primary : colors.gray3}
                fill={focused ? colors.green2 : colors.gray3}
              />
            </UI.Block>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
