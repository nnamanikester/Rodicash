import {useTheme} from '@/contexts/ThemeContext';
import {formatMoney} from '@/utils';
import React from 'react';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import * as UI from '../common';
import SVG from '../SVG';

interface TransactionItemProps {
  title: string;
  type: 'debit' | 'credit' | 'cashout';
  amount: string;
  onClick?: (() => void) | undefined;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  onClick,
  amount,
  type,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <UI.Clickable onClick={onClick}>
        <UI.Block justify="space-between" row style={styles.container}>
          <UI.Block row width="auto">
            <UI.Block
              backgroundColor={colors.gray3}
              width="auto"
              style={styles.avatar}>
              <SVG
                containerStyle={{
                  width: 24,
                  height: 24,
                }}
                name="cashout2"
                color={colors.gray1}
                fill={colors.gray1}
              />
            </UI.Block>
            <UI.Block width="auto">
              <UI.Text body>{title}</UI.Text>
              <UI.Text color={colors.gray2}>Cash out</UI.Text>
            </UI.Block>
          </UI.Block>
          <UI.Block width="auto">
            <UI.Text
              body
              color={type === 'credit' ? colors.secondary : colors.text}>
              {type === 'credit' && '+'}
              {formatMoney(amount)}
            </UI.Text>
            <UI.Text color={colors.gray2}>9:45am</UI.Text>
          </UI.Block>
        </UI.Block>
      </UI.Clickable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  avatar: {
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  amount: {
    fontSize: hd('2.2%'),
    lineHeight: hd('4%'),
    fontFamily: 'Gordita-Medium',
  },
});

export default TransactionItem;
