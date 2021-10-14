import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {ActivityIndicator, Keyboard} from 'react-native';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {useAuth} from '@/hooks';
import {validateEmail} from '@/utils';
import {useFocusEffect} from '@react-navigation/core';
import {connect, useSelector} from 'react-redux';
import {setUser as setAuthUser} from '@/store/actions';
import {IRootState} from '@/store/reducers';
import {UserType} from '@/store/types';

interface RegisterScreenProps {
  navigation: any;
  setUser: (user: UserType) => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({
  navigation,
  setUser,
}) => {
  const {colors} = useTheme();
  const userStore = useSelector((state: IRootState) => state.user);

  useFocusEffect(() => {
    if (userStore.email) {
      if (!userStore.isVerified) {
        navigation.replace('EmailVerification');
      }
      if (userStore.isVerified && !userStore.username) {
        navigation.replace('Username');
      }
    }
  });

  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [referralCode, setReferralCode] = React.useState<string>('');

  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const [handleAuth, isLoading, data, authError] = useAuth({
    name,
    email,
    password,
    phone,
    referralCode,
  });

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
      const {message} = authError;
      setError(message);
      console.log(authError);
    }
    if (data) {
      const {user} = data;
      setUser({
        name: user.name,
        email: user.email,
        isActive: user.isActive,
        isVerified: user.isVerified,
        account: user.account,
      });
      console.log(data);
      navigation.replace('EmailVerification');
    }
  }, [authError, data]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setPasswordError(false);

    if (!name) {
      setNameError(true);
      setError('Name cannot be blank.');
      return;
    }
    if (!email || !validateEmail(email)) {
      setEmailError(true);
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone) {
      setPhoneError(true);
      setError('Please enter a valid phone number');
      return;
    }
    if (!password || password.length < 6) {
      setPasswordError(true);
      setError('Password is required and must be up to 6 characters.');
      return;
    }
    handleAuth('register');
  };

  // const submitData = (): void => {
  //   navigation.replace('EmailVerification');
  // };

  const clearError = (): void => {
    setError('');
    setEmailError(false);
    setPhoneError(false);
    setPasswordError(false);
    setNameError(false);
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
        <UI.Text h1>Create {'\n'}Account.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Full Name</UI.Text>
            <UI.TextInput
              autoFocus
              autoCorrect={false}
              value={name}
              onChangeText={setName}
              error={nameError}
              placeholder="e.g: Frankpeter Ani"
              iconRight={<SVG color={colors.secondary} name="contact" />}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Email Address</UI.Text>
            <UI.TextInput
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              error={emailError}
              keyboardType="email-address"
              placeholder="e.g: you@email.com"
              iconRight={<SVG color={colors.secondary} name="mail" />}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Phone Number</UI.Text>
            <UI.TextInput
              value={phone}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPhone}
              error={phoneError}
              placeholder="e.g 08174139617"
              keyboardType="phone-pad"
              iconRight={
                <SVG
                  fill={colors.orange2}
                  color={colors.orange1}
                  name="phone"
                />
              }
              iconLeft={
                <UI.Block
                  row
                  center
                  backgroundColor={colors.background}
                  style={[styles.countrySelect, {borderColor: colors.gray3}]}>
                  <SVG
                    color={colors.secondary}
                    name="nigerian-flag"
                    containerStyle={{top: 2}}
                  />
                  <UI.Icon size={20} name="chevron-down" />
                </UI.Block>
              }
              inputStyle={{paddingLeft: 80}}
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

          <UI.Block>
            <UI.Text body>Referral code (optional)</UI.Text>
            <UI.TextInput
              value={referralCode}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setReferralCode}
              placeholder="e.g: 123ABC"
              iconRight={
                <SVG
                  size={20}
                  color={colors.orange1}
                  fill={colors.orange2}
                  name="heart"
                />
              }
            />
          </UI.Block>

          <UI.Spacer large />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Block row middle>
            <UI.Text color={colors.white} bold>
              SIGN UP
            </UI.Text>
            <UI.Spacer />
            {isLoading && <ActivityIndicator color={colors.white} />}
          </UI.Block>
        </UI.Button>

        <UI.Spacer medium />

        {!isKeyboardOpen && (
          <>
            <UI.Block row middle>
              <UI.Text>Already have an account?</UI.Text>
              <UI.Spacer size={3} />
              <UI.Link onClick={() => navigation.replace('Login')}>
                Login
              </UI.Link>
            </UI.Block>

            <UI.Spacer medium />
          </>
        )}
      </UI.Block>
    </>
  );
};

export default connect(null, {setUser: setAuthUser})(RegisterScreen);
