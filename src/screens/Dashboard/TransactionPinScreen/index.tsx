import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar} from 'react-native';
import ErrorMessage from '@/components/ErrorMessage';

interface TransactionPinScreenProps {
  navigation: any;
}

const TransactionPinScreen: React.FC<TransactionPinScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  const [password, setPassword] = React.useState<string>('');
  const [newPin, setNewPin] = React.useState<string>('');
  const [confirmPin, setConfirmPin] = React.useState<string>('');

  const [passwordError, setPasswordError] = React.useState<boolean>(false);
  const [newPinError, setNewPinError] = React.useState<boolean>(false);
  const [confirmPinError, setConfirmPinError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setPasswordError(false);
    setNewPinError(false);
    setConfirmPinError(false);

    if (!password) {
      setPasswordError(true);
      setError('Name cannot be blank');
      return;
    }
    if (!newPin) {
      setNewPinError(true);
      setError('Please enter a valid address');
      return;
    }
    if (confirmPin !== newPin) {
      setNewPinError(true);
      setConfirmPinError(true);
      setError('Passwords do not match');
      return;
    }
    submitData();
  };

  const submitData = (): void => {
    navigation.goBack();
  };

  const clearError = (): void => {
    setError('');
    setPasswordError(false);
    setNewPinError(false);
    setConfirmPinError(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

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
        <UI.Text h1>Transaction PIN</UI.Text>
        <UI.Spacer medium />

        <UI.Block>
          <UI.Block>
            <UI.Text body>New PIN</UI.Text>
            <UI.TextInput
              value={newPin}
              onChangeText={setNewPin}
              error={newPinError}
              password
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Confirm New PIN</UI.Text>
            <UI.TextInput
              value={confirmPin}
              onChangeText={setConfirmPin}
              error={confirmPinError}
              password
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Password</UI.Text>
            <UI.TextInput
              value={password}
              onChangeText={setPassword}
              error={passwordError}
              password
            />
          </UI.Block>

          <UI.Spacer />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Text color={colors.white} bold>
            RESET
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default TransactionPinScreen;
