import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar} from 'react-native';
import SVG from '@/components/SVG';
import RodiCode from '@/components/RodiCode';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {msToTime} from '@/utils';

interface CashoutCodeScreenProps {
  navigation: any;
}

const CashoutCodeScreen: React.FC<CashoutCodeScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [time, setTime] = React.useState<number>(86400000);

  React.useEffect(() => {
    const timer = setTimeout(() => setTime(time - 1000), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <UI.Clickable onClick={() => navigation.pop()}>
        <UI.Block
          center
          style={styles.header}
          backgroundColor={colors.background}
          row>
          <UI.Icon name="chevron-back-circle-outline" />
          <UI.Spacer size={2} />
          <UI.Text color={colors.gray2}>Back</UI.Text>
        </UI.Block>
      </UI.Clickable>
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
