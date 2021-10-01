import React from 'react';
import {Image, ScrollView, StatusBar} from 'react-native';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {formatMoney} from '@/utils';
import LinearGradient from 'react-native-linear-gradient';
import SVG from '@/components/SVG';

interface TransactionScreenProps {
  navigation: any;
}

const TransactionScreen: React.FC<TransactionScreenProps> = () => {
  const {colors} = useTheme();
  const tabColors = React.useMemo(
    () => ({
      active: [colors.orange1, colors.orange2],
      inactive: [colors.transparent, colors.transparent],
    }),
    [],
  );

  const [tab, setTab] = React.useState<'send' | 'request'>('send');

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <UI.Layout>
        <UI.Block>
          <UI.Text h1>Transfer</UI.Text>
        </UI.Block>

        <UI.Spacer />

        <UI.Block
          style={[styles.availableCash, {borderColor: colors.gray3}]}
          center
          row
          justify="space-between">
          <UI.Text color={colors.gray2} note>
            Available Cash
          </UI.Text>

          <UI.Text h2>{formatMoney('50000')}</UI.Text>
        </UI.Block>

        <UI.Spacer large />

        <UI.Block
          row
          backgroundColor={colors.gray4}
          style={[styles.tabContainer, {borderColor: colors.gray3}]}>
          <UI.Clickable onClick={setTab.bind(null, 'send')} style={{flex: 1}}>
            <LinearGradient
              style={styles.tab}
              colors={tab === 'send' ? tabColors.active : tabColors.inactive}>
              <UI.Text
                style={styles.tabText}
                color={tab === 'send' ? colors.white : colors.gray2}
                bold>
                Send
              </UI.Text>
            </LinearGradient>
          </UI.Clickable>
          <UI.Clickable
            onClick={setTab.bind(null, 'request')}
            style={{flex: 1}}>
            <LinearGradient
              style={styles.tab}
              colors={
                tab === 'request' ? tabColors.active : tabColors.inactive
              }>
              <UI.Text
                color={tab === 'request' ? colors.white : colors.gray2}
                style={styles.tabText}
                bold>
                Request
              </UI.Text>
            </LinearGradient>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Amount</UI.Text>
          <UI.TextInput
            iconRight={
              <UI.Text size={20} color={colors.secondary}>
                ₦
              </UI.Text>
            }
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Reason for sending cash</UI.Text>
          <UI.TextInput />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Receiver's email</UI.Text>
          <UI.TextInput />
          <UI.Spacer />
          <UI.Block right>
            <UI.Clickable
              style={[styles.selectButton, {borderColor: colors.secondary}]}>
              <UI.Text color={colors.secondary}>Select Contact</UI.Text>
            </UI.Clickable>
          </UI.Block>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Favourites</UI.Text>

          <UI.Spacer />

          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <UI.Clickable>
              <UI.Block middle width="auto" style={styles.contactSearch}>
                <SVG
                  name="user-search"
                  containerStyle={{
                    width: 20,
                    height: 20,
                  }}
                />
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Block center width="auto">
              <Image
                source={{uri: 'https://placekitten.com/200'}}
                style={styles.contact}
              />
              <UI.Text note>Evans</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width="auto">
              <Image
                source={{uri: 'https://placekitten.com/210'}}
                style={styles.contact}
              />
              <UI.Text note>Alfred</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width="auto">
              <Image
                source={{uri: 'https://placekitten.com/180'}}
                style={styles.contact}
              />
              <UI.Text note>Emeka</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width="auto">
              <Image
                source={{uri: 'https://placekitten.com/150'}}
                style={styles.contact}
              />
              <UI.Text note>Martins</UI.Text>
            </UI.Block>
          </ScrollView>
        </UI.Block>

        <UI.Spacer large />
      </UI.Layout>

      <UI.Block
        backgroundColor={colors.background}
        style={{paddingHorizontal: 20}}>
        <UI.Button primary>
          <UI.Text color={colors.white} bold>
            CONTINUE
          </UI.Text>
        </UI.Button>
        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default TransactionScreen;
