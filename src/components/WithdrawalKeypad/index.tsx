import {Pop} from '@/animations/Pop';
import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import * as UI from '../common';
import SVG from '../SVG';

interface WithdrawalKeypadProps {
  onChangeValue: (val: string) => void;
  onDelete: (val: string) => void;
  value: string;
  min?: number;
  maxLength?: number;
}

const WithdrawalKeypad: React.FC<WithdrawalKeypadProps> = ({
  onChangeValue,
  onDelete,
  value,
  maxLength = 9,
}) => {
  const {colors} = useTheme();

  const handleValueChange = (val: string) => {
    if (maxLength && value.length >= maxLength) {
      return;
    }
    if (parseInt(value, 10) === 0 && val === '0') {
      return onChangeValue('0');
    }
    return onChangeValue(value + val);
  };

  const handleDelete = (): void => {
    if (value.length === 1) {
      return onDelete('0');
    }
    return onDelete(value.substring(0, value.length - 1));
  };

  return (
    <UI.Block justify="space-between" flex style={styles.keypadContainer}>
      <UI.Block row justify="space-between">
        <Pop
          testID="one"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('1')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>1</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="two"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('2')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>2</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="three"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('3')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>3</UI.Text>
          </UI.Block>
        </Pop>
      </UI.Block>

      <UI.Block row justify="space-between">
        <Pop
          testID="four"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('4')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>4</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="five"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('5')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>5</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="six"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('6')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>6</UI.Text>
          </UI.Block>
        </Pop>
      </UI.Block>

      <UI.Block row justify="space-between">
        <Pop
          testID="seven"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('7')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>7</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="eight"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('8')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>8</UI.Text>
          </UI.Block>
        </Pop>
        <Pop
          testID="nine"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('9')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>9</UI.Text>
          </UI.Block>
        </Pop>
      </UI.Block>

      <UI.Block row justify="space-between">
        <UI.Block style={[styles.keypad, {borderColor: colors.transparent}]} />

        <Pop
          testID="zero"
          from={1}
          to={0.8}
          onClick={() => handleValueChange('0')}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <UI.Text h1>0</UI.Text>
          </UI.Block>
        </Pop>
        <Pop testID="delete" from={1} to={0.8} onClick={handleDelete}>
          <UI.Block
            center
            middle
            backgroundColor={colors.white}
            style={[styles.keypad, {borderColor: colors.gray3}]}>
            <SVG
              name="delete"
              color={colors.gray1}
              containerStyle={{
                width: 24,
                height: 24,
              }}
            />
          </UI.Block>
        </Pop>
      </UI.Block>
    </UI.Block>
  );
};

const styles = StyleSheet.create({
  keypadContainer: {
    paddingHorizontal: wd('10%'),
    paddingVertical: hd('5%'),
  },
  keypad: {
    width: wd('15%'),
    height: wd('15%'),
    borderRadius: 100,
    borderWidth: 1,
  },
});

export default WithdrawalKeypad;
