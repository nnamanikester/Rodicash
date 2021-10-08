import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar} from 'react-native';
import ErrorMessage from '@/components/ErrorMessage';

interface ResetPasswordScreenProps {
  navigation: any;
}

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  const [oldPassword, setOldPassword] = React.useState<string>('');
  const [newPassword, setNewPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const [oldPasswordError, setOldPasswordError] =
    React.useState<boolean>(false);
  const [newPasswordError, setNewPasswordError] =
    React.useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setOldPasswordError(false);
    setNewPasswordError(false);
    setConfirmPasswordError(false);

    if (!oldPassword) {
      setOldPasswordError(true);
      setError('Name cannot be blank');
      return;
    }
    if (!newPassword) {
      setNewPasswordError(true);
      setError('Please enter a valid address');
      return;
    }
    if (confirmPassword !== newPassword) {
      setNewPasswordError(true);
      setConfirmPasswordError(true);
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
    setOldPasswordError(false);
    setNewPasswordError(false);
    setConfirmPasswordError(false);
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
        <UI.Text h1>Reset Password</UI.Text>
        <UI.Spacer medium />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Old Password</UI.Text>
            <UI.TextInput
              value={oldPassword}
              onChangeText={setOldPassword}
              error={oldPasswordError}
              password
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>New Password</UI.Text>
            <UI.TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              error={newPasswordError}
              password
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Confirm New Password</UI.Text>
            <UI.TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              error={confirmPasswordError}
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

export default ResetPasswordScreen;
