import React from 'react';
import {
  TextInput as TI,
  View,
  StyleSheet,
  Platform,
  LayoutAnimation,
  UIManager,
  TextInputProps as TIProps,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {Text} from '../Text';
import {Block} from '../Block';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../store/reducers';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface TextInputProps extends TIProps {
  password?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  error?: boolean;
  type?: 'normal' | 'disabled' | 'outline' | 'ghost' | 'underline';
  shape?: 'normal' | 'rounded';
  rows?: number;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  floatLabel?: boolean;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const colors = useSelector((state: IRootState) => state.colors);

  const {
    onFocus,
    onBlur,
    onEndEditing,
    password,
    rows,
    iconRight,
    iconLeft,
    error,
    type,
    shape,
    containerStyle,
    floatLabel,
    placeholder,
    inputStyle,
  } = props;

  let iconLeftStyle: ViewStyle = {
    paddingLeft: iconLeft ? 50 : 10,
  };
  let iconRightStyle: ViewStyle = {
    paddingRight: iconRight ? 50 : 10,
  };
  const errorStyle: TextStyle = error
    ? {color: colors.danger, borderColor: colors.danger}
    : {};
  let shapeStyle: ViewStyle = {
    borderRadius: shape === 'rounded' ? 50 : shape === 'normal' ? 15 : 15,
  };
  let typeStyle: TextStyle = {};
  let editable = true;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 10,
    },
    input: {
      borderWidth: 1.5,
      borderColor: '#C4C4C4',
      borderRadius: 5,
      height: hd('6.5%'),
      color: colors.text,
      fontSize: hd('2%'),
      fontFamily: 'DMSans-Regular',
      paddingHorizontal: 10,
      flex: 1,
      backgroundColor: 'transparent',
    },
    iconLeft: {
      alignItems: 'center',
      paddingHorizontal: 10,
      position: 'absolute',
      left: 5,
      zIndex: 10,
    },
    iconRight: {
      alignItems: 'center',
      paddingHorizontal: 10,
      position: 'absolute',
      right: 5,
      zIndex: 10,
    },
  });

  const [active, setActive] = React.useState(false);

  switch (type) {
    case 'disabled':
      editable = false;
      break;
    case 'outline':
      typeStyle = {
        borderWidth: 1,
        borderColor: colors.primary,
      };
      break;
    case 'ghost':
      typeStyle = {
        elevation: 2,
      };
      break;
    case 'underline':
      typeStyle = {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: colors.text,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    LayoutAnimation.easeInEaseOut();
    if (onFocus) {
      onFocus(e);
    }
    return setActive(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
    return setActive(false);
  };

  React.useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [active]);

  return (
    <View style={{marginTop: active ? 5 : 0, ...containerStyle}}>
      {floatLabel && active ? (
        <Block style={{paddingLeft: 10, marginBottom: -10, zIndex: 1}}>
          <Text size={hd('1.7%')} color={colors.primary}>
            {placeholder}
          </Text>
        </Block>
      ) : null}
      <View style={{...styles.container}}>
        {iconLeft ? <View style={{...styles.iconLeft}}>{iconLeft}</View> : null}
        <TI
          onEndEditing={onEndEditing}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={password}
          numberOfLines={rows}
          textBreakStrategy="highQuality"
          placeholderTextColor={
            active && props.value && props.value.length > 0
              ? 'transparent'
              : colors.grey
          }
          editable={editable}
          style={{
            ...styles.input,
            ...inputStyle,
            ...iconLeftStyle,
            ...iconRightStyle,
            ...errorStyle,
            ...typeStyle,
            ...shapeStyle,
            borderColor: active
              ? colors.primary
              : error
              ? colors.danger
              : type === 'underline'
              ? colors.grey
              : colors.primary,
          }}
          {...props}
        />
        {iconRight ? (
          <View style={{...styles.iconRight}}>{iconRight}</View>
        ) : null}
      </View>
    </View>
  );
};
