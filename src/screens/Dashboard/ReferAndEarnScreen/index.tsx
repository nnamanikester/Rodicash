import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar} from 'react-native';
import SVG from '@/components/SVG';

interface ReferAndEarnScreenProps {
  navigation: any;
}

const ReferAndEarnScreen: React.FC<ReferAndEarnScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.goBack()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout noScroll>
        <UI.Text h1>Refer And Earn</UI.Text>
        <UI.Spacer medium />

        <UI.Block flex bottom>
          <UI.Text h2 style={{textAlign: 'center'}}>
            Invite your friends and earn up to $50
          </UI.Text>
          <UI.Text color={colors.gray1} note style={{textAlign: 'center'}}>
            Share this code below for users to sign up with after downloading
            the app, and earn when your friend signs up using the app.
          </UI.Text>

          <UI.Spacer large />
          <UI.Spacer />

          <UI.Block
            backgroundColor={colors.background}
            style={[styles.refCode, {borderColor: colors.gray3}]}
            row
            center
            justify="space-between">
            <UI.Text body color={colors.gray1}>
              45JD4K
            </UI.Text>
            <UI.Clickable>
              <UI.Block center row width="auto">
                <SVG
                  size={20}
                  name="copy"
                  color={colors.orange1}
                  fill={colors.orange2}
                />
                <UI.Spacer size={2} />
                <UI.Text note color={colors.secondary}>
                  Copy
                </UI.Text>
              </UI.Block>
            </UI.Clickable>
          </UI.Block>
        </UI.Block>

        <UI.Spacer large />
        <UI.Spacer />
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary>
          <UI.Text color={colors.white} bold>
            INVITE FRIENDS
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default ReferAndEarnScreen;
