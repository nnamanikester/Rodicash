import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar, Keyboard} from 'react-native';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';

interface RegisterScreenProps {
  navigation: any;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [nameError, setNameError] = React.useState<boolean>(false);
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
    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setPasswordError(false);

    if (!name) {
      setNameError(true);
      setError('Name cannot be blank');
      return;
    }
    if (!email) {
      setEmailError(true);
      setError('Please enter a valid email address');
      return;
    }
    if (!phone) {
      setPhoneError(true);
      setError('Please enter a valid phone number');
      return;
    }
    if (!password) {
      setPasswordError(true);
      setError('Please enter a valid password');
      return;
    }
    submitData();
  };

  const submitData = (): void => {
    navigation.replace('EmailVerification');
  };

  const clearError = (): void => {
    setError('');
    setEmailError(false);
    setPhoneError(false);
    setPasswordError(false);
    setNameError(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {error.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={error} />
      )}

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
        <UI.Text h1>Create {'\n'}Account.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Full Name</UI.Text>
            <UI.TextInput
              autoFocus
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
              onChangeText={setPhone}
              error={phoneError}
              placeholder="e.g 08174139617"
              keyboardType="phone-pad"
              iconRight={<SVG color={colors.secondary} name="phone" />}
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
          <UI.Text color={colors.white} bold>
            SIGN UP
          </UI.Text>
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

export default RegisterScreen;
