import {useTheme} from '@/contexts/ThemeContext';
import {SET_TOAST} from '@/store/types';
import * as React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import * as UI from '../common';
import SVG from '../SVG';

const isIOS = Platform.OS === 'ios';

interface ToastProps {
  message: string;
  /**
   * Determines hie long to show toast in {seconds}
   */
  timeout?: number;
}

const Toast: React.FC<ToastProps> = ({message, timeout}) => {
  const {colors} = useTheme();
  const [time, setTime] = React.useState<number>(timeout || 3);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (time >= 0) {
        setTime(time - 1);
      } else {
        dispatch({type: SET_TOAST, payload: ''});
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <UI.Block style={styles.background}>
      <UI.Block
        row
        center
        backgroundColor={colors.text}
        style={styles.container}>
        <SVG
          name="success-circle"
          size={24}
          color={colors.orange1}
          fill={colors.orange2}
        />
        <UI.Spacer />
        <UI.Text color={colors.white} note>
          {message}
        </UI.Text>
      </UI.Block>
    </UI.Block>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    bottom: isIOS ? 30 : 20,
    paddingHorizontal: wd('5%'),
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    zIndex: 9999,
  },
  container: {
    padding: 5,
    borderRadius: 10,
  },
});

export default Toast;
