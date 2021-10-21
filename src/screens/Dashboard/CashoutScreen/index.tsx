import React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {formatMoney, formatMoneyWithoutSymbol, withdrawalCharge} from '@/utils';
import WithdrawalKeypad from '@/components/WithdrawalKeypad';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';

interface CashoutScreenProps {
  navigation: any;
}

const CashoutScreen: React.FC<CashoutScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [amount, setAmount] = React.useState('0');
  const [amountError, setAmountError] = React.useState('');

  const handleChangeAmount = (val: string): void => {
    setAmount(val);
  };

  const handleWithdrawal = (): void => {
    if (parseInt(amount, 10) < 100) {
      return setAmountError('The minimum withdrawal amount is: \u20A6 100');
    }
    navigation.navigate('CashoutCode', {
      amount: parseInt(amount, 10),
      charge: parseInt(withdrawalCharge(amount), 10),
    });
  };

  const clearError = (): void => {
    setAmountError('');
  };

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {amountError.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={amountError} />
      )}

      <UI.Block backgroundColor={colors.background} style={styles.header}>
        <UI.Block row center justify="space-between">
          <UI.Text h2>Cash out</UI.Text>
          <UI.Clickable
            onClick={() => navigation.navigate('Notifications')}
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
              <UI.Text
                h1
                colors={[colors.green1, colors.green2]}
                style={styles.outputText}>
                {formatMoneyWithoutSymbol(amount)}
              </UI.Text>
              <UI.Text h1 colors={[colors.green1, colors.green2]}>
                .00
              </UI.Text>
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
          maxLength={8}
        />

        <UI.Block style={{paddingHorizontal: 20}}>
          <UI.Button
            testID="withdraw_button"
            primary
            onClick={handleWithdrawal}>
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
