import React from 'react';
import {
  Text as TXT,
  StyleSheet,
  TextProps as TXTProps,
  TextStyle,
} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {IRootState} from '../../../store/reducers';

export interface TextProps extends TXTProps {
  /**
   * Used to change the font size of the `Text`. Default is `16`.
   */
  size?: number;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  bold?: boolean;
  body?: boolean;
  color?: string;
  note?: boolean;
}

/**
 * A component for displaying texts which supports
 */
export const Text: React.FC<TextProps> = ({
  h1 = false,
  h2 = false,
  h3 = false,
  bold = false,
  body = false,
  note = false,
  size,
  children,
  color,
  style,
}) => {
  const colors = useSelector((state: IRootState) => state.colors);

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: hd('2.2%'),
      fontFamily: 'Gordita-Regular',
      lineHeight: hd('3%'),
    },
  });

  const textStyle: TextStyle = {};

  if (h1) {
    textStyle.fontSize = hd('3.1%');
    textStyle.lineHeight = hd('4.9%');
    textStyle.fontFamily = 'Gordita-Bold';
  } else if (h2) {
    textStyle.fontSize = hd('3.1%%');
    textStyle.lineHeight = hd('4.8%');
    textStyle.fontFamily = 'Gordita-Bold';
  } else if (h3) {
    textStyle.fontSize = hd('3.1%%');
    textStyle.lineHeight = hd('4.8%');
    textStyle.fontFamily = 'Gordita-Bold';
  } else if (note) {
    textStyle.color = '#E0E0E0';
    textStyle.fontSize = hd('1.7%');
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 5;
  } else if (body) {
    textStyle.fontSize = hd('2%');
    textStyle.lineHeight = hd('4%');
    textStyle.fontFamily = 'Gordita-Medium';
  }

  if (color) {
    textStyle.color = color;
  } else {
    textStyle.color = colors.text;
  }

  if (bold) {
    textStyle.fontFamily = 'Gordita-Bold';
    textStyle.fontSize = hd('1.8%');
    textStyle.lineHeight = hd('3%');
  }

  return <TXT style={[styles.text, textStyle, style]}>{children}</TXT>;
};
