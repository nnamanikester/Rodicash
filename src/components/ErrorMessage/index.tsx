import React from 'react';
import {StatusBar} from 'react-native';
import * as UI from '@/components/common';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';
import SVG from '../SVG';
import {useTheme} from '@/contexts/ThemeContext';
import {SlideY} from '@/animations';

interface ErrorMessageProps {
  message: string;
  onDismiss: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({onDismiss, message}) => {
  const {colors} = useTheme();
  const [from, setFrom] = React.useState(200);
  const [to, setTo] = React.useState(0);

  const beforeDismiss = (): void => {
    setFrom(0);
    setTo(500);

    onDismiss();
  };

  return (
    <UI.Block
      flex
      style={{
        position: 'absolute',
        width: wd('100%'),
        height: hd('100%'),
        zIndex: 10,
      }}>
      <SlideY from={from} to={to} duration={300}>
        <UI.Block
          style={{
            padding: wd('5%'),
            shadowColor: colors.warning,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
          }}
          backgroundColor={colors.warning}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.warning}
          />

          <UI.Block row center>
            <SVG name="error" />
            <UI.Text color={colors.white} bold>
              ERROR
            </UI.Text>
          </UI.Block>

          <UI.Text color={colors.white}>{message}</UI.Text>

          <UI.Spacer large />

          <UI.Button onClick={beforeDismiss} transparent>
            <UI.Text bold color={colors.white}>
              OKAY
            </UI.Text>
          </UI.Button>
        </UI.Block>
      </SlideY>
    </UI.Block>
  );
};

export default ErrorMessage;
