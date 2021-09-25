import React from 'react';
import {StatusBar} from 'react-native';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {formatMoney, formatMoneyWithoutSymbol, withdrawalCharge} from '@/utils';
import WithdrawalKeypad from '@/components/WithdrawalKeypad';

interface CashoutScreenProps {
  navigation: any;
}

const CashoutScreen: React.FC<CashoutScreenProps> = ({}) => {
  const {colors} = useTheme();
  const [amount, setAmount] = React.useState('100');

  const handleChangeAmount = (val: string): void => {
    setAmount(val);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.background} />

      <UI.Block backgroundColor={colors.background} style={styles.header}>
        <UI.Block row center justify="space-between">
          <UI.Text h2>Cash out</UI.Text>
          <UI.Clickable
            style={[styles.notificationButton, {borderColor: colors.gray4}]}>
            <UI.Icon color={colors.text} name="notifications" />
          </UI.Clickable>
        </UI.Block>

        <UI.Block style={styles.output} center>
          <UI.Block row center middle>
            <UI.Text h1>{'\u20A6'}</UI.Text>
            <UI.Block
              row
              style={[styles.outputTextContainer, {borderColor: colors.gray3}]}>
              <UI.Text h1 style={styles.outputText}>
                {formatMoneyWithoutSymbol(amount)}
              </UI.Text>
              <UI.Text h1>.00</UI.Text>
            </UI.Block>
          </UI.Block>
          <UI.Block
            backgroundColor={`${colors.secondary}20`}
            style={[styles.fee, {borderColor: colors.secondary}]}>
            <UI.Text>Fee: {formatMoney(withdrawalCharge(amount))}</UI.Text>
          </UI.Block>
        </UI.Block>
      </UI.Block>

      <UI.Block backgroundColor="#F6F9FC" flex>
        <WithdrawalKeypad
          onChangeValue={handleChangeAmount}
          onDelete={setAmount}
          value={amount}
        />

        <UI.Block style={{paddingHorizontal: 20}}>
          <UI.Button secondary>
            <UI.Text bold color={colors.white}>
              WITHDRAW
            </UI.Text>
          </UI.Button>
        </UI.Block>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default CashoutScreen;
