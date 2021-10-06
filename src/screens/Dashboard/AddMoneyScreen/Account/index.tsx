import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {SlideX} from '@/animations';
import SVG from '@/components/SVG';
import styles from './styles';
import ReserveAccount from '@/components/ReserveAccount';

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const {colors} = useTheme();
  const [bvn, setBvn] = React.useState<boolean>(false);
  const [showReserve, setShowReserve] = React.useState<boolean>(false);

  return (
    <>
      <ReserveAccount
        onBVNVerified={setBvn.bind(null, true)}
        show={showReserve}
        onClose={setShowReserve.bind(null, false)}
      />

      <SlideX from={-500} to={0} duration={200} style={{flex: 1}}>
        {!bvn ? (
          <UI.Block center style={{paddingHorizontal: wd('4%')}}>
            <UI.Spacer large />
            <UI.Spacer large />

            <UI.Text h1>Reserve an Account</UI.Text>

            <UI.Spacer />

            <UI.Text color={colors.gray2} style={{textAlign: 'center'}}>
              Create a virtual bank account which you can send money to, and it
              automatically reflects in your Rodi cash wallet.
            </UI.Text>

            <UI.Spacer large />

            <UI.Block>
              <UI.Button primary onClick={setShowReserve.bind(null, true)}>
                <UI.Text bold color={colors.white}>
                  CONTINUE
                </UI.Text>
              </UI.Button>
            </UI.Block>
          </UI.Block>
        ) : (
          <UI.Block flex center>
            <UI.Spacer large />

            <UI.Text color={colors.gray2} note>
              Using bank account:
            </UI.Text>

            <UI.Spacer />

            <UI.Block style={[styles.detailsBox, {borderColor: colors.gray3}]}>
              <UI.Block>
                <UI.Text color={colors.green2} size={12}>
                  ACCOUNT NAME
                </UI.Text>
                <UI.Spacer size={2} />
                <UI.Text bold>FRANKPETER ANI</UI.Text>
              </UI.Block>

              <UI.Spacer medium />

              <UI.Block row justify="space-between" center>
                <UI.Block width="auto">
                  <UI.Text color={colors.green2} size={12}>
                    ACCOUNT NUMBER
                  </UI.Text>
                  <UI.Text bold>6173110037</UI.Text>
                </UI.Block>

                <UI.Clickable>
                  <UI.Block row width="auto">
                    <SVG
                      color={colors.orange1}
                      fill={colors.orange2}
                      name="copy"
                    />
                    <UI.Text note color={colors.secondary}>
                      Copy
                    </UI.Text>
                  </UI.Block>
                </UI.Clickable>
              </UI.Block>

              <UI.Spacer medium />

              <UI.Block>
                <UI.Text color={colors.green2} size={12}>
                  BANK NAME
                </UI.Text>
                <UI.Spacer size={2} />
                <UI.Text bold>PROVIDUS BANK</UI.Text>
              </UI.Block>
            </UI.Block>

            <UI.Spacer large />

            <UI.Block
              row
              center
              style={[styles.info, {borderColor: colors.gray4}]}>
              <SVG name="shaded-error" color={colors.gray2} />
              <UI.Text color={colors.gray2} size={12}>
                Fund your wallet by making a bank transfer to the above account
                number.
              </UI.Text>
            </UI.Block>
          </UI.Block>
        )}
      </SlideX>
    </>
  );
};

export default Account;
