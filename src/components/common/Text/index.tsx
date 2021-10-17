import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import {
  Text as TXT,
  StyleSheet,
  TextProps as TXTProps,
  TextStyle,
  Platform,
} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {LinearTextGradient} from 'react-native-text-gradient';

const isIOS = Platform.OS === 'ios';

export interface TextProps extends TXTProps {
  /**
   * Used to change the font size of the `Text`. Default is `16`.
   */
  size?: number;
  h1?: boolean;
  h2?: boolean;
  bold?: boolean;
  body?: boolean;
  color?: string;
  colors?: [string, string];
  note?: boolean;
}

/**
 * A component for displaying texts which supports
 */
export const Text: React.FC<TextProps> = props => {
  const {
    h1 = false,
    h2 = false,
    bold = false,
    body = false,
    note = false,
    size,
    children,
    color,
    colors: gradColors,
    style,
  } = props;
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: isIOS ? hd('1.7%') : hd('2.2%'),
      fontFamily: 'Gordita-Regular',
      lineHeight: isIOS ? hd('2.4%') : hd('3%'),
    },
  });

  const textStyle: TextStyle = {};

  if (h1) {
    textStyle.fontSize = isIOS ? hd('2.5%') : hd('3.1%');
    textStyle.lineHeight = isIOS ? hd('3.8%') : hd('4.9%');
    textStyle.fontFamily = 'Gordita-Bold';
  } else if (h2) {
    textStyle.fontSize = hd('2.8%%');
    textStyle.lineHeight = hd('4%');
    textStyle.fontFamily = 'Gordita-Bold';
  } else if (note) {
    textStyle.color = colors.gray2;
    textStyle.fontSize = isIOS ? hd('1.5%') : hd('1.9%');
    textStyle.lineHeight = isIOS ? hd('2%') : hd('2.4%');
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 5;
  } else if (body) {
    textStyle.fontSize = isIOS ? hd('1.8%') : hd('2%');
    textStyle.lineHeight = isIOS ? hd('2%') : hd('2.8%');
    textStyle.fontFamily = 'Gordita-Medium';
  }

  if (color) {
    textStyle.color = color;
  } else {
    textStyle.color = colors.text;
  }

  if (bold) {
    textStyle.fontFamily = 'Gordita-Bold';
    textStyle.fontSize = isIOS ? hd('1.5%') : hd('1.8%');
    textStyle.lineHeight = isIOS ? hd('2.4%') : hd('3%');
  }

  return gradColors ? (
    <LinearTextGradient
      style={[styles.text, textStyle, style]}
      locations={[0, 1]}
      colors={gradColors}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <TXT>{children}</TXT>
    </LinearTextGradient>
  ) : (
    <TXT {...props} style={[styles.text, textStyle, style]}>
      {children}
    </TXT>
  );
};
