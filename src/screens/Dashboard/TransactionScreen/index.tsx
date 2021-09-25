import React from 'react';
import {StatusBar} from 'react-native';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';

interface TransactionScreenProps {
  navigation: any;
}

const TransactionScreen: React.FC<TransactionScreenProps> = ({}) => {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar backgroundColor={colors.background} />

      <UI.Layout>
        <UI.Text h1>Home Screen</UI.Text>
      </UI.Layout>
    </>
  );
};

export default TransactionScreen;
