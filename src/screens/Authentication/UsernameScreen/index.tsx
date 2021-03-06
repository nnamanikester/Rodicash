import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import AppStatusBar from '@/components/AppStatusBar';
import {useCreateUsername} from '@/hooks';
import {ActivityIndicator} from 'react-native';

interface UsernameScreenProps {
  navigation: any;
}

const UsernameScreen: React.FC<UsernameScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [createUsername, isLoading, data, requestError] = useCreateUsername();

  const [username, setUsername] = React.useState<string>('');

  const [usernameError, setUsernameError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (data) {
      console.log(data);
      navigation.replace('CreatePin', {username});
    }
    if (requestError) {
      setError(requestError.message);
      console.log(requestError);
    }
  }, [data, requestError]);

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setUsernameError(false);

    if (!username || username.length < 3) {
      setUsernameError(true);
      setError('Username must be at least 3 characters.');
      return;
    }
    createUsername(username);
  };

  const clearError = (): void => {
    setError('');
    setUsernameError(false);
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
        <UI.Text h1>Choose {'\n'}Username.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Choose a Username</UI.Text>
            <UI.TextInput
              autoCorrect={false}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
              error={usernameError}
              placeholder="e.g: kester123"
            />
          </UI.Block>

          <UI.Spacer size={3} />

          <UI.Text note color={colors.gray2}>
            Hey, be careful. Your username can???t be changed again.
          </UI.Text>
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

export default UsernameScreen;
