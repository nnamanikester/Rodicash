import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {useResetPassword} from '@/hooks';
import {ActivityIndicator} from 'react-native';
import {setUser as setAuthUser} from '@/store/actions';
import {connect} from 'react-redux';
import {validateEmail} from '@/utils';

interface RequestPasswordResetScreenProps {
  navigation: any;
}

const RequestPasswordResetScreen: React.FC<RequestPasswordResetScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const [onPasswordReset, isLoading, data, requestError] = useResetPassword();

  const [email, setEmail] = React.useState<string>('');

  const [emailError, setEmailError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (data) {
      console.log(data);
      navigation.replace('Reset');
    }
    if (requestError) {
      setError(requestError.message);
      console.log(requestError);
    }
  }, [data, requestError]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setEmailError(false);

    if (!email || !validateEmail(email)) {
      setEmailError(true);
      setError('Please enter a valid email address.');
      return;
    }
    onPasswordReset({type: 'request', data: email});
  };

  const clearError = (): void => {
    setError('');
    setEmailError(false);
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
        <UI.Clickable testID="back_button" onClick={() => navigation.goBack()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout>
        <UI.Text h1>Request {'\n'}Password reset.</UI.Text>
        <UI.Spacer />
        <UI.Text>Enter your email address to reset your password.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Text body>Email address</UI.Text>
          <UI.TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            keyboardType="email-address"
            placeholder="e.g: you@email.com"
          />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Block row middle>
            <UI.Text color={colors.white} bold>
              CONTINUE
            </UI.Text>
            <UI.Spacer />
            {isLoading && <ActivityIndicator color={colors.white} />}
          </UI.Block>
        </UI.Button>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default connect(null, {setUser: setAuthUser})(
  RequestPasswordResetScreen,
);
