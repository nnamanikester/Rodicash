import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import SVG from '@/components/SVG';
import RodiCode from '@/components/RodiCode';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {msToTime} from '@/utils';
import {useFocusEffect} from '@react-navigation/core';
import AppStatusBar from '@/components/AppStatusBar';

interface CashoutCodeScreenProps {
  navigation: any;
  route: any;
}

const CashoutCodeScreen: React.FC<CashoutCodeScreenProps> = ({
  navigation,
  route,
}) => {
  const {colors} = useTheme();
  const [time] = React.useState<number>(86400000);
  const [amount, setAmount] = React.useState<number>(0);
  const [charge, setCharge] = React.useState<number>(0);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => setTime(time - 1000), 1000);
  //   return () => clearTimeout(timer);
  // });

  React.useEffect(() => {
    const waiter = setTimeout(() => {
      navigation.replace('ConfirmCashout', {amount, charge});
    }, 5000);

    return () => clearTimeout(waiter);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const {params} = route;
      if (!params.amount || !params.charge) {
        navigation.goBack();
      }
      setAmount(params.amount);
      setCharge(params.charge);
      return () => null;
    }, [route]),
  );

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.pop()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>
      <UI.Layout>
        <UI.Text h1>Scan QR Code.</UI.Text>
        <UI.Text color={colors.gray1}>
          Scan this QR code with the merchant to transfer the funds and collect
          your cash.
        </UI.Text>
        <UI.Spacer large />

        <UI.Block style={{paddingHorizontal: 20}}>
          <UI.Block
            row
            center
            justify="space-between"
            backgroundColor={colors.gray4}
            style={[styles.codeContainer, {borderColor: colors.gray3}]}>
            <UI.Text h1>53DN4HDK</UI.Text>
            <UI.Clickable>
              <UI.Block row center>
                <SVG
                  name="copy"
                  color={colors.secondary}
                  fill={colors.orange2}
                  size={20}
                />
                <UI.Spacer />
                <UI.Text color={colors.secondary}>Copy</UI.Text>
              </UI.Block>
            </UI.Clickable>
          </UI.Block>
        </UI.Block>

        <UI.Spacer large />
        <UI.Spacer medium />

        <UI.Block backgroundColor={colors.gray4} center style={styles.qrcode}>
          <RodiCode value="53DN4HDK" size={hd('25%')} />
        </UI.Block>
      </UI.Layout>

      <UI.Block
        center
        backgroundColor={colors.background}
        style={styles.footer}>
        <UI.Block row center width="auto">
          <SVG
            name="timer"
            color={colors.primary}
            fill={colors.green2}
            size={20}
          />
          <UI.Spacer size={3} />
          <UI.Text color={colors.primary}>{msToTime(time, true)}</UI.Text>
        </UI.Block>
        <UI.Text color={colors.gray1}>left to use this code</UI.Text>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default CashoutCodeScreen;
