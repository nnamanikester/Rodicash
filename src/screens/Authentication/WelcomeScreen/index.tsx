import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {Image, Keyboard, Platform} from 'react-native';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {connect, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import {useAuth} from '@/hooks';
import {
  setToken as setAuthToken,
  setUser as setAuthUser,
} from '@/store/actions';
import {UserType} from '@/store/types';
import Keychain from 'react-native-keychain';
import {RODICASH_LOGIN} from '@/constants';

interface WelcomeScreenProps {
  navigation: any;
  setUser: (user: UserType) => void;
  setToken: (token: string) => void;
}

const isIOS = Platform.OS === 'ios';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  setUser,
  setToken,
  navigation,
}) => {
  const {colors} = useTheme();
  const {
    user: {name, email, photo},
    appSettings: {isBiometrics},
  } = useSelector((state: IRootState) => state);

  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [biometricsType, setBiometricsType] =
    React.useState<Keychain.BIOMETRY_TYPE | null>(null);

  React.useEffect(() => {
    Keychain.getSupportedBiometryType().then(biometryType => {
      setBiometricsType(biometryType);
    });
  }, []);

  const [password, setPassword] = React.useState<string>('');

  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const [handleAuth, isLoading, data, authError] = useAuth('login');

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  React.useEffect(() => {
    if (authError) {
      setError(authError.message);
      console.log(authError);
    }
    if (data) {
      console.log(data);
      const user = data.user;
      setKeychainData();
      setUser({
        name: user.name,
        email: user.email,
        phone: user.phone,
        photo: user.photo,
        username: user.username,
        isActive: user.isActive,
        isVerified: user.isVerified,
        account: user.account,
      });
      setToken(data.token);
    }
  }, [data, authError]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setPasswordError(false);

    if (!password) {
      setPasswordError(true);
      setError('Password required.');
      return;
    }
    handleAuth({email: email ? email : '', password});
  };

  const handleSwitchAccount = () => {
    setUser({email: null, name: null});
    if (!email) {
      navigation.replace('Onboarding');
    }
  };

  const clearError = () => {
    setPasswordError(false);
    setError('');
  };

  // SAVE LOGIN DETAILS IN THE KEYCHAIN
  const setKeychainData = async (): Promise<void> => {
    try {
      const res = await Keychain.setGenericPassword(
        email ? email : '',
        password,
        {
          service: RODICASH_LOGIN,
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
          accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
        },
      );
      console.log('setKeychainData => ', res);
    } catch (e: any) {
      console.log('setKeychainDRError => ', e);
    }
  };

  const handleBiometrics = async (): Promise<void> => {
    try {
      const cred = await Keychain.getGenericPassword({
        service: RODICASH_LOGIN,
        authenticationPrompt: {
          title: 'Biometrics verification',
        },
      });
      if (!cred) {
        setError('Please login with your password.');
      } else {
        handleAuth({email: cred.username, password: cred.password});
        console.log(cred);
      }
    } catch (e: any) {
      console.log('handleBiometrics => ', e);
      if (
        e.message === 'The user name or passphrase you entered is not correct.'
      ) {
        setError('Invalid biometrics credenttials');
      }
    }
  };

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      {error.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={error} />
      )}

      <UI.Layout refreshing={isLoading}>
        <UI.Spacer large />

        <UI.Block center row justify="space-between">
          <UI.Text body>Hey, {name?.split(' ')[0]}</UI.Text>
          {photo ? (
            <Image source={{uri: photo}} />
          ) : (
            <UI.Block
              center
              middle
              backgroundColor={colors.gray3}
              style={styles.avatar}>
              <UI.Text body color={colors.secondary}>
                {name?.split(' ')[0][0]}
                {name?.split(' ')[1][0]}
              </UI.Text>
            </UI.Block>
          )}
        </UI.Block>

        <UI.Spacer medium />

        <UI.Text h1>Welcome {'\n'}Back.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Password</UI.Text>
            <UI.TextInput
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
              error={passwordError}
              password={!passwordVisible}
              placeholder="•••••••••••••"
              iconRight={<SVG color={colors.secondary} name="lock" />}
            />
            <UI.Spacer size={3} />
            <UI.Block right>
              <UI.Clickable
                onClick={() => setPasswordVisible(!passwordVisible)}
                style={[styles.showButton, {borderColor: colors.secondary}]}>
                <UI.Text color={colors.secondary}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </UI.Text>
              </UI.Clickable>
            </UI.Block>
          </UI.Block>

          <UI.Spacer />
        </UI.Block>

        <UI.Spacer large />

        {isBiometrics && biometricsType && (
          <UI.Block center style={styles.biometricsContainer}>
            <UI.Clickable onClick={handleBiometrics}>
              <UI.Block
                center
                middle
                style={[styles.biometrics, {borderColor: colors.gray3}]}>
                {biometricsType === 'Fingerprint' ||
                biometricsType === 'TouchID' ? (
                  <>
                    <SVG name="finger-print" size={50} />
                    <UI.Spacer />
                    <UI.Text body>{isIOS ? 'Touch ID' : 'Fingerprint'}</UI.Text>
                  </>
                ) : null}
                {biometricsType === 'FaceID' && (
                  <>
                    <SVG name="face-id" size={50} />
                    <UI.Spacer />
                    <UI.Text body>Face ID</UI.Text>
                  </>
                )}
              </UI.Block>
            </UI.Clickable>
          </UI.Block>
        )}
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Text color={colors.white} bold>
            LOGIN
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />

        {!isKeyboardOpen && (
          <>
            <UI.Block row middle>
              <UI.Text>Not you?</UI.Text>
              <UI.Spacer size={3} />
              <UI.Link onClick={handleSwitchAccount}>Switch Account</UI.Link>
            </UI.Block>

            <UI.Spacer medium />
          </>
        )}
      </UI.Block>
    </>
  );
};

export default connect(null, {setUser: setAuthUser, setToken: setAuthToken})(
  WelcomeScreen,
);
