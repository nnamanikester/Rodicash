import React from 'react';
import {Image, ScrollView} from 'react-native';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {formatMoney} from '@/utils';
import LinearGradient from 'react-native-linear-gradient';
import SVG from '@/components/SVG';
import ContactsModal from './ContactsModal';
import EnterPin from '@/components/EnterPin';
import TransactionSuccess from './TransactionSuccess';
import AppStatusBar from '@/components/AppStatusBar';

interface TransactionScreenProps {
  navigation: any;
}

const TransactionScreen: React.FC<TransactionScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const enterPinRef = React.useRef<EnterPin>(null);
  const tabColors = React.useMemo(
    () => ({
      active: [colors.orange1, colors.orange2],
      inactive: [colors.transparent, colors.transparent],
    }),
    [],
  );

  const [tab, setTab] = React.useState<'send' | 'request'>('send');
  const [amount, setAmount] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [reason, setReason] = React.useState<string>('');
  const [showContacts, setShowContacts] = React.useState<boolean>(false);
  const [showSucces, setShowSuccess] = React.useState<boolean>(false);

  const onContinue = (): void => {
    enterPinRef.current?.show();
  };

  const onConfirmPin = (): void => {
    setShowSuccess(true);
  };

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {showSucces && (
        <TransactionSuccess
          onBackToHome={() => navigation.replace('Home')}
          receipient={{
            name: 'Frankpeter Ani',
            image: 'https://placekitten.com/100',
            username: '@kescript',
            time: '9:00AM',
          }}
        />
      )}

      <ContactsModal
        show={showContacts}
        onClose={setShowContacts.bind(null, false)}
        onSelectContact={setEmail}
      />

      <UI.Layout>
        <UI.Spacer />
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
          <UI.Clickable
            testID="send_tab"
            onClick={setTab.bind(null, 'send')}
            style={{flex: 1}}>
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
            testID="request_tab"
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
          <UI.Text body>{tab === 'send' ? 'Amount' : 'How much?'}</UI.Text>
          <UI.TextInput
            value={amount}
            onChangeText={setAmount}
            keyboardType="number-pad"
            iconRight={
              <UI.Text size={20} color={colors.secondary}>
                ₦
              </UI.Text>
            }
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>
            {tab === 'send'
              ? 'Reason for sending cash'
              : 'Reason for requesting cash'}
          </UI.Text>
          <UI.TextInput
            value={reason}
            maxLength={34}
            onChangeText={setReason}
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Block row center>
            <UI.Text body>
              {tab === 'send' ? "Receiver's email" : 'Send bill to?'}
            </UI.Text>
            <UI.Spacer size={2} />
            <UI.Text note color={colors.gray3}>
              {'(Enter email address)'}
            </UI.Text>
          </UI.Block>
          <UI.TextInput
            testID="email_field"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <UI.Spacer />
          <UI.Block right>
            <UI.Clickable
              testID="select_contact_button"
              onClick={setShowContacts.bind(null, true)}
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
            <UI.Clickable onClick={setShowContacts.bind(null, true)}>
              <UI.Block middle flex>
                <UI.Block middle width="auto" style={styles.contactSearch}>
                  <SVG
                    name="user-search"
                    containerStyle={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </UI.Block>
                <UI.Text note>Search</UI.Text>
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Clickable>
              <UI.Block center width="auto">
                <Image
                  source={{uri: 'https://placekitten.com/200'}}
                  style={styles.contact}
                />
                <UI.Text note>Evans</UI.Text>
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Clickable>
              <UI.Block center width="auto">
                <Image
                  source={{uri: 'https://placekitten.com/210'}}
                  style={styles.contact}
                />
                <UI.Text note>Alfred</UI.Text>
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Clickable>
              <UI.Block center width="auto">
                <Image
                  source={{uri: 'https://placekitten.com/180'}}
                  style={styles.contact}
                />
                <UI.Text note>Emeka</UI.Text>
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Clickable>
              <UI.Block center width="auto">
                <Image
                  source={{uri: 'https://placekitten.com/150'}}
                  style={styles.contact}
                />
                <UI.Text note>Martins</UI.Text>
              </UI.Block>
            </UI.Clickable>

            <UI.Spacer />

            <UI.Clickable>
              <UI.Block center width="auto">
                <Image
                  source={{uri: 'https://placekitten.com/150'}}
                  style={styles.contact}
                />
                <UI.Text note>Ben</UI.Text>
              </UI.Block>
            </UI.Clickable>
          </ScrollView>
        </UI.Block>

        <UI.Spacer large />

        <EnterPin onFinish={onConfirmPin} ref={enterPinRef} maxLength={4}>
          <UI.Spacer />
          <UI.Text color={colors.secondary}>
            {tab === 'send' ? 'Sending to' : 'Requesting from'}
          </UI.Text>
          <UI.Spacer />
          <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />
          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between">
              <UI.Block row width="auto">
                <UI.Block width="auto">
                  <Image
                    source={{uri: 'https://placekitten.com/200'}}
                    style={[styles.contactImage, {borderRadius: 100}]}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Block width="auto">
                  <UI.Text bold>Kester Nnamani</UI.Text>
                  <UI.Text note color={colors.gray2}>
                    frankpeterani@gmail.com
                  </UI.Text>
                  <UI.Text bold>{formatMoney('5000')}</UI.Text>
                </UI.Block>
              </UI.Block>
              <UI.Block center width="auto">
                <SVG name="chevron-right" />
              </UI.Block>
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />
        </EnterPin>
      </UI.Layout>

      <UI.Block
        backgroundColor={colors.background}
        style={{paddingHorizontal: 20}}>
        <UI.Button testID="continue_button" primary onClick={onContinue}>
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
