import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import {msToTime} from '@/utils';
import AppStatusBar from '@/components/AppStatusBar';
import {useEmailVerification} from '@/hooks/useEmailVerification';
import {connect, useDispatch, useSelector} from 'react-redux';
import {IRootState} from '@/store/reducers';
import {setUser as setAuthUser} from '@/store/actions';
import {SET_TOKEN} from '@/store/types';

interface EmailVerificationScreen {
  navigation: any;
  setUser: any;
}

const INITIAL_TIME = 180000;

const EmailVerificationScreen: React.FC<EmailVerificationScreen> = ({
  navigation,
  setUser,
}) => {
  const {colors} = useTheme();

  const [code, setCode] = React.useState<string>('');
  const [codeError, setCodeError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [time, setTime] = React.useState<number>(INITIAL_TIME);

  const [verifyEmail, isLoading, data, verificationError, resend] =
    useEmailVerification();
  const {user} = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  React.useEffect(() => {
    if (verificationError) {
      setCodeError(true);
      setError(verificationError.message);
    }
    if (data) {
      console.log(data);
      setUser({...user, isVerified: true});
      dispatch({type: SET_TOKEN, payload: data.token});
      navigation.replace('Username');
    }
  }, [data, verificationError]);

  const submitData = (value: string): void => {
    verifyEmail({email: user.email ? user.email : '', code: value});
  };

  const handleResendCode = () => {
    setTime(INITIAL_TIME);
    resend(user.email ? user.email : '');
  };

  const clearError = (): void => {
    setError('');
    setCodeError(false);
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

      <UI.Layout refreshing={isLoading}>
        <UI.Text h1>Email {'\n'}Verification.</UI.Text>

        <UI.Spacer />

        <UI.Text>We have sent a 6-digit code to your mailbox</UI.Text>
        <UI.Block row>
          <UI.Text color={colors.secondary}>{user.email}.</UI.Text>
          <UI.Spacer size={3} />
          <UI.Text>Enter code here.</UI.Text>
        </UI.Block>

        <UI.Spacer large />

        <UI.Block>
          <UI.Block>
            <UI.PinInput
              error={codeError}
              value={code}
              autoFocus
              onChangeText={setCode}
              onFinish={submitData}
            />
          </UI.Block>

          <UI.Spacer large />

          <UI.Block row>
            <UI.Text>Resend code in</UI.Text>
            <UI.Spacer size={3} />
            <UI.Text bold color={colors.secondary}>
              {msToTime(time)}s
            </UI.Text>
          </UI.Block>
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        {time <= 0 && (
          <UI.Button onClick={handleResendCode} type="outline">
            <UI.Text color={colors.secondary} bold>
              RESEND
            </UI.Text>
          </UI.Button>
        )}

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default connect(null, {setUser: setAuthUser})(EmailVerificationScreen);
