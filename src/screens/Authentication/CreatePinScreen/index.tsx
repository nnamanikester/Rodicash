import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import AppStatusBar from '@/components/AppStatusBar';
import {useCreatePin} from '@/hooks';
import {ActivityIndicator, Alert} from 'react-native';
import {setUser} from '@/store/actions';
import {useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';

interface CreatePinScreen {
  navigation: any;
  route: any;
}

const CreatePinScreen: React.FC<CreatePinScreen> = ({navigation, route}) => {
  const {colors} = useTheme();
  const username = React.useMemo(() => route.params.username, []);
  const [handleCreatePin, isLoading, data, createPinError] = useCreatePin();
  const {user} = useSelector((state: IRootState) => state);

  const [pin, setPin] = React.useState<string>('');
  const [confirmPin, setConfirmPin] = React.useState<string>('');
  const [confirm, setConfirm] = React.useState<boolean>(false);
  const [pinError, setPinError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e: any) => {
        if (data) {
          return;
        }
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        Alert.alert(
          'Discard changes?',
          "You haven't completed your registration. Are you sure you want to leave the screen?",
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => {
                setUser({...user, username});
                navigation.dispatch(e.data.action);
              },
            },
          ],
        );
      }),
    [navigation],
  );

  React.useEffect(() => {
    if (data) {
      navigation.replace('BVN', {username});
    }
    if (createPinError) {
      setError(createPinError.message);
      setPinError(true);
      console.log(createPinError);
    }
  }, [data, createPinError]);

  const validatePin = (value: string): void => {
    setPinError(false);

    if (!confirmPin) {
      setPinError(true);
      setError('Please confirm your PIN');
      return;
    }

    if (value !== pin) {
      setPinError(true);
      setError('PIN do not match');
      setConfirm(false);
      setPin('');
      setConfirmPin('');
      return;
    }
  };

  const clearError = (): void => {
    setError('');
    setPinError(false);
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
        <UI.Text h1>Create {'\n'}PIN.</UI.Text>

        <UI.Spacer />

        <UI.Text>
          This PIN will be used for your transactions. Keep it safe.
        </UI.Text>

        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.Text body>{confirm ? 'Confirm PIN' : 'Enter a PIN'}</UI.Text>
            <UI.PinInput
              error={pinError}
              value={confirm ? confirmPin : pin}
              autoFocus
              length={4}
              password
              onChangeText={confirm ? setConfirmPin : setPin}
              onFinish={confirm ? validatePin : () => setConfirm(true)}
              cellStyle={styles.cell}
              cellSpacing={wd('8%')}
            />
          </UI.Block>

          <UI.Spacer large />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Text note color={colors.gray2} style={{textAlign: 'center'}}>
          By creating a PIN, you agree with our{' '}
          <UI.Link color={colors.gray2}> Terms & Conditions </UI.Link> and{' '}
          <UI.Link color={colors.gray2}>{'  '}Privacy Policy </UI.Link>
        </UI.Text>
        <UI.Spacer />
        {confirmPin.length === 4 && (
          <UI.Button onClick={() => handleCreatePin(pin)} primary>
            <UI.Block row middle>
              <UI.Text color={colors.white} bold>
                ALL SET
              </UI.Text>
              <UI.Spacer />
              {isLoading && <ActivityIndicator color={colors.white} />}
            </UI.Block>
          </UI.Button>
        )}

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default CreatePinScreen;
