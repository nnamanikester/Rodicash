import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {Keyboard, ActivityIndicator} from 'react-native';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {validateEmail} from '@/utils';
import {useAuth} from '@/hooks';
import {connect} from 'react-redux';
import {
  setToken as setAuthToken,
  setUser as setAuthUser,
} from '@/store/actions';
import {UserType} from '@/store/types';

interface LoginScreenProps {
  navigation: any;
  setUser: (user: UserType) => void;
  setToken: (token: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  navigation,
  setUser,
  setToken,
}) => {
  const {colors} = useTheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const [handleAuth, isLoading, data, authError] = useAuth({email, password});

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
      const {stack, message} = authError;
      setPasswordError(stack === 'password' || stack === null);
      setEmailError(authError.stack === 'email' || stack === null);
      setError(message);
      console.log(authError);
    }
    if (data) {
      console.log(data);
      const user = data.user;
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
      if (!user.username) {
        navigation.replace('Username');
      }
    }
  }, [authError, data]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setEmailError(false);
    setPasswordError(false);

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      setError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setPasswordError(true);
      setError('Password is required and must be up to 6 characters.');
      return;
    }
    handleAuth('login');
  };

  // const submitData = (): void => {
  //   navigation.replace('Welcome');
  // };

  const clearError = (): void => {
    setError('');
    setEmailError(false);
    setPasswordError(false);
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

      <UI.Layout>
        <UI.Text h1>Login.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Email Address</UI.Text>
            <UI.TextInput
              autoFocus
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              error={emailError}
              keyboardType="email-address"
              placeholder="e.g: you@email.com"
              iconRight={<SVG color={colors.secondary} name="mail" />}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Password</UI.Text>
            <UI.TextInput
              value={password}
              autoCorrect={false}
              autoCapitalize="none"
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
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Block row middle>
            <UI.Text color={colors.white} bold>
              LOGIN
            </UI.Text>
            <UI.Spacer />
            {isLoading && <ActivityIndicator color={colors.white} />}
          </UI.Block>
        </UI.Button>

        <UI.Spacer medium />

        {!isKeyboardOpen && (
          <>
            <UI.Block row middle>
              <UI.Text>Forgot Password?</UI.Text>
              <UI.Spacer size={3} />
              <UI.Link onClick={() => navigation.push('Reset')}>Reset</UI.Link>
            </UI.Block>

            <UI.Spacer medium />
          </>
        )}
      </UI.Block>
    </>
  );
};

export default connect(null, {setUser: setAuthUser, setToken: setAuthToken})(
  LoginScreen,
);
