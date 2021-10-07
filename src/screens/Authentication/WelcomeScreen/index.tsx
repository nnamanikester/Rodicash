import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar, Keyboard} from 'react-native';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';
import {useAppDispatch} from '@/hooks';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [biometricsType] = React.useState<'fingerprint' | 'face'>(
    'fingerprint',
  );

  const [password, setPassword] = React.useState<string>('');

  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

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

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setPasswordError(false);

    if (!password) {
      setPasswordError(true);
      setError('Password incorrect');
      return;
    }
    submitData();
  };

  const submitData = (): void => {
    dispatch({
      type: 'SET_USER',
      payload: {
        token: 'hello',
        email: 'nnamanikester@gmail.com',
        name: 'John Kester',
      },
    });
  };

  const clearError = () => {
    setPasswordError(false);
    setError('');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {error.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={error} />
      )}

      <UI.Layout>
        <UI.Spacer large />

        <UI.Block center row justify="space-between">
          <UI.Text body>Hey, Kester</UI.Text>
          <UI.Block
            center
            middle
            backgroundColor={colors.gray3}
            style={styles.avatar}>
            <UI.Text h1 color={colors.secondary}>
              IM
            </UI.Text>
          </UI.Block>
        </UI.Block>

        <UI.Spacer medium />

        <UI.Text h1>Welcome {'\n'}Back.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Password</UI.Text>
            <UI.TextInput
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

        <UI.Block center style={styles.biometricsContainer}>
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.biometrics, {borderColor: colors.gray3}]}>
              {biometricsType === 'fingerprint' && (
                <>
                  <SVG name="finger-print" size={50} />
                  <UI.Spacer />
                  <UI.Text body>Touch ID</UI.Text>
                </>
              )}
              {biometricsType === 'face' && (
                <>
                  <SVG name="face-id" size={50} />
                  <UI.Spacer />
                  <UI.Text body>Face ID</UI.Text>
                </>
              )}
            </UI.Block>
          </UI.Clickable>
        </UI.Block>
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
              <UI.Link onClick={() => navigation.replace('Login')}>
                Switch Account
              </UI.Link>
            </UI.Block>

            <UI.Spacer medium />
          </>
        )}
      </UI.Block>
    </>
  );
};

export default WelcomeScreen;
