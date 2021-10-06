import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {StatusBar, Modal} from 'react-native';
import ErrorMessage from '@/components/ErrorMessage';

interface ReserveAccountProps {
  show: boolean;
  onBVNVerified?: () => void;
  onClose?: () => void;
}

const ReserveAccount: React.FC<ReserveAccountProps> = ({
  show,
  onBVNVerified,
  onClose,
}) => {
  const {colors} = useTheme();

  const [bvn, setBvn] = React.useState<string>('');

  const [bvnError, setBvnError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

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
    onBVNVerified && onBVNVerified();
    onClose && onClose();
  };

  const clearError = (): void => {
    setError('');
    setBvnError(false);
  };

  const pasteClipboard = (): void => {};

  return (
    <Modal visible={show}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {error.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={error} />
      )}

      <UI.Clickable onClick={onClose}>
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
      <UI.Layout noScroll>
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
            SUBMIT
          </UI.Text>
        </UI.Button>

        <UI.Spacer large />
      </UI.Block>
    </Modal>
  );
};

export default ReserveAccount;
