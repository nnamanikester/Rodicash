import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import ErrorMessage from '@/components/ErrorMessage';
import {msToTime} from '@/utils';
import AppStatusBar from '@/components/AppStatusBar';

interface EmailVerificationScreen {
  navigation: any;
}

const EmailVerificationScreen: React.FC<EmailVerificationScreen> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  const [code, setCode] = React.useState<string>('');
  const [codeError, setCodeError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [time, setTime] = React.useState<number>(180000);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1000);
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  const submitData = (value: string): void => {
    setCodeError(false);

    if (value !== '123456') {
      setCodeError(true);
      setError('Code incorrect');
      return;
    }

    navigation.replace('Username');
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
        <UI.Clickable onClick={() => navigation.pop()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout>
        <UI.Text h1>Email {'\n'}Verification.</UI.Text>

        <UI.Spacer />

        <UI.Text>We have sent a 6-digit code to your mailbox</UI.Text>
        <UI.Block row>
          <UI.Text color={colors.secondary}>k******@email.com.</UI.Text>
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
          <UI.Button type="outline">
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

export default EmailVerificationScreen;
