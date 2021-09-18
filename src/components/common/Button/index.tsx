import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {ColorsState} from '../../../store/types';
import {Clickable, ClickableProps} from '../Clickable';

interface ButtonProps extends ClickableProps {
  /**
   * Defines the type of button to render.
   */
  type?: 'normal' | 'outline' | 'disabled' | 'ghost';
  /**
   * Defines the size of the button
   * `small` or `large`
   */
  size?: 'small' | 'large';
  /**
   * An element to show at the left of the button component
   */
  iconLeft?: React.ReactNode;
  /**
   * An element to show at the right of the button component
   */
  iconRight?: React.ReactNode;
  /**
   * Shows or hides the a divider between the Icons if exists
   */
  showIconDivider?: boolean;
}

export interface ButtonIconProps {
  colors: ColorsState;
  showIconDivider?: boolean;
}

let smallStyle = {};
let typeStyle = {};
let disabled = 0.8;

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size,
  type,
  iconRight,
  iconLeft,
  showIconDivider,
  style,
}) => {
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    button: {
      borderRadius: 15,
      backgroundColor: colors.primary,
      height: hd('6.5%'),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
      elevation: 2,
      flexDirection: 'row',
    },
    title: {
      fontSize: 16,
      // textTransform: 'uppercase',
      flex: 3,
      textAlign: 'center',
    },
    iconLeft: {
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: colors.grey,
      paddingHorizontal: 15,
    },
    iconRight: {
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: colors.grey,
      paddingHorizontal: 15,
    },
  });

  switch (type) {
    case 'disabled':
      typeStyle = {
        elevation: 0,
        backgroundColor: colors.lightPrimary,
        borderWidth: 0,
      };
      disabled = 1;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: '#fff',
      };
      break;
    case 'ghost':
      typeStyle = {
        backgroundColor: colors.background,
        elevation: 0,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  switch (size) {
    case 'small':
      smallStyle = {
        width: widthPercentageToDP('44%'),
      };
      break;
    case 'large':
      smallStyle = {
        width: '100%',
      };
      break;
    default:
      smallStyle = {
        width: '100%',
      };
      break;
  }

  return (
    <Clickable
      onClick={type === 'disabled' ? undefined : onClick}
      style={{
        ...styles.button,
        ...smallStyle,
        ...typeStyle,
        ...style,
      }}
      activeOpacity={disabled}>
      {iconLeft ? (
        <View
          style={{
            ...styles.iconLeft,
            borderColor: colors.inactive,
            borderRightWidth: showIconDivider ? 1 : 0,
          }}>
          {iconLeft}
        </View>
      ) : null}
      {/* <Text color={color} style={{ ...styles.title }}> */}
      {children}
      {/* </Text> */}
      {iconRight ? (
        <View
          style={{
            ...styles.iconRight,
            borderLeftWidth: showIconDivider ? 1 : 0,
            borderColor: colors.inactive,
          }}>
          {iconRight}
        </View>
      ) : null}
    </Clickable>
  );
};
