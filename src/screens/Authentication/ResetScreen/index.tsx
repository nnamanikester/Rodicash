import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {useResetPassword} from '@/hooks';
import {ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';
import {SET_TOAST} from '@/store/types';

interface ResetScreenProps {
  navigation: any;
}

const ResetScreen: React.FC<ResetScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [onPasswordReset, isLoading, data, requestError] = useResetPassword();
  const dispatch = useDispatch();

  const [password, setPassword] = React.useState<string>('');
  const [code, setCode] = React.useState<string>('');

  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({type: SET_TOAST, payload: 'Password reset successful!'});
      navigation.pop();
    }
    if (requestError) {
      setError(requestError.message);
      setCode('');
      setPassword('');
      console.log(requestError);
    }
  }, [data, requestError]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setPasswordError(false);

    if (!password || password.length < 6) {
      setPasswordError(true);
      setError('Password must be at least 6 characters.');
      return;
    }
    onPasswordReset({type: 'reset', data: {code, password}});
  };

  const clearError = (): void => {
    setError('');
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
        <UI.Clickable onClick={() => navigation.pop()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout>
        <UI.Text h1>Reset {'\n'}Password.</UI.Text>
        <UI.Spacer />
        <UI.Text>
          {code.length === 6
            ? 'Enter your new password'
            : 'A code to reset your password has been sent to the provided email'}
        </UI.Text>
        <UI.Spacer large />

        <UI.Block>
          {code.length !== 6 ? (
            <UI.Block>
              <UI.PinInput
                value={code}
                autoFocus
                length={6}
                onChangeText={setCode}
              />
            </UI.Block>
          ) : (
            <UI.Block>
              <UI.Text body>New Password</UI.Text>
              <UI.TextInput
                autoFocus
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                password
                onChangeText={setPassword}
                error={passwordError}
              />
            </UI.Block>
          )}
          <UI.Spacer />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Block row middle>
            <UI.Text color={colors.white} bold>
              RESET
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

export default ResetScreen;
