import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar, Keyboard} from 'react-native';
import ErrorMessage from '@/components/ErrorMessage';
import RegistrationSuccessful from '@/components/RegistrationSuccessful';
import {useAppDispatch} from '@/hooks';

interface BVNScreenProps {
  navigation: any;
}

const BVNScreen: React.FC<BVNScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const dispatch = useAppDispatch();

  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<boolean>(false);

  const [bvn, setBvn] = React.useState<string>('');
  const [completed, setCompleted] = React.useState<boolean>(false);

  const [bvnError, setBvnError] = React.useState<boolean>(false);
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
    setBvnError(false);

    if (!bvn) {
      setBvnError(true);
      setError('BVN cannot be empty');
      return;
    }

    if (bvn.length < 10) {
      setBvnError(true);
      setError('Please enter a valid BVN');
      return;
    }

    submitData();
  };

  const submitData = (): void => {
    setCompleted(true);
  };

  const clearError = (): void => {
    setError('');
    setBvnError(false);
  };

  const pasteClipboard = (): void => {};

  const complete = (): void => {
    dispatch({
      type: 'SET_USER',
      payload: {
        token: 'hello',
        email: 'nnamanikester@gmail.com',
        name: 'John Kester',
      },
    });
  };

  if (completed) {
    return <RegistrationSuccessful onContinue={complete} />;
  }

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
        <UI.Text h1>BVN {'\n'}Verification.</UI.Text>
        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Enter your BVN</UI.Text>
            <UI.TextInput
              autoFocus
              value={bvn}
              onChangeText={setBvn}
              error={bvnError}
              keyboardType="number-pad"
              iconRight={
                <UI.Clickable onClick={pasteClipboard}>
                  <UI.Text bold color={colors.secondary}>
                    Paste
                  </UI.Text>
                </UI.Clickable>
              }
            />
          </UI.Block>

          <UI.Spacer />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Text color={colors.white} bold>
            NEXT
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />

        {!isKeyboardOpen && (
          <>
            <UI.Block center>
              <UI.Link onClick={submitData}>Skip this stage</UI.Link>
            </UI.Block>

            <UI.Spacer medium />
          </>
        )}
      </UI.Block>
    </>
  );
};

export default BVNScreen;
