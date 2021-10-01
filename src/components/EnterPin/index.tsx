import {ThemeContext} from '@/contexts/ThemeContext';
import React from 'react';
import {StyleSheet} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import * as UI from '../common';
import {PinInput} from '../common';
import SVG from '../SVG';

interface EnterPinProps {
  onChangeValue: (val: string) => void;
  onFinish?: (val: string) => void;
  maxLength: number;
  min?: number;
}

interface EnterPinState {
  value: string;
  showButton: boolean;
}

class EnterPin extends React.Component<EnterPinProps, EnterPinState> {
  static contextType = ThemeContext;
  public actionSheetRef;

  constructor(props: EnterPinProps) {
    super(props);
    this.state = {
      value: '',
      showButton: false,
    };
    this.actionSheetRef = React.createRef<ActionSheet>();
  }

  handleValueChange = (val: string): void => {
    const {maxLength, onChangeValue} = this.props;
    const {value} = this.state;
    if (value.length >= maxLength) {
      return;
    }
    if ((value + val).length === maxLength) {
      this.setState({showButton: true});
    }
    this.setState({value: value + val});
    onChangeValue(value + val);
  };

  handleDelete = (): void => {
    const {onChangeValue} = this.props;
    const {value} = this.state;

    this.setState({value: value.substring(0, value.length - 1)});
    return onChangeValue(value.substring(0, value.length - 1));
  };

  show = (): void => {
    this.actionSheetRef.current?.setModalVisible(true);
  };

  hide = (): void => {
    this.actionSheetRef.current?.setModalVisible(false);
  };

  render() {
    const {colors} = this.context;
    const {value, showButton} = this.state;
    const {children, onFinish} = this.props;

    return (
      <ActionSheet
        ref={this.actionSheetRef}
        gestureEnabled
        closeOnTouchBackdrop={false}
        bounceOnOpen
        CustomHeaderComponent={
          <UI.Block
            backgroundColor={colors.gray3}
            center
            style={styles.headerComponent}
          />
        }
        containerStyle={styles.keypadContainer}>
        <UI.Spacer />
        <UI.Block right>
          <UI.Clickable onClick={this.hide}>
            <UI.Icon
              size={24}
              color={colors.gray2}
              name="closecircleo"
              type="AntDesign"
            />
          </UI.Clickable>
        </UI.Block>
        {children}
        <UI.Spacer medium />
        <UI.Block center>
          <UI.Text bold>Enter your PIN</UI.Text>
          <UI.Spacer />
          <PinInput value={value} length={4} password cellStyle={styles.cell} />
        </UI.Block>

        <UI.Spacer large />

        <UI.Block row justify="space-between">
          <UI.Clickable onClick={() => this.handleValueChange('1')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>1</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('2')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>2</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('3')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>3</UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Clickable onClick={() => this.handleValueChange('4')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>4</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('5')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>5</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('6')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>6</UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Clickable onClick={() => this.handleValueChange('7')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>7</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('8')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>8</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={() => this.handleValueChange('9')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>9</UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Block
            style={[styles.keypad, {borderColor: colors.transparent}]}
          />

          <UI.Clickable onClick={() => this.handleValueChange('0')}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <UI.Text h2>0</UI.Text>
            </UI.Block>
          </UI.Clickable>
          <UI.Clickable onClick={this.handleDelete}>
            <UI.Block
              center
              middle
              backgroundColor={colors.white}
              style={[styles.keypad]}>
              <SVG
                name="delete"
                color={colors.gray1}
                containerStyle={{
                  width: 24,
                  height: 24,
                }}
              />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        {showButton && (
          <>
            <UI.Spacer />
            <UI.Button
              primary
              onClick={onFinish ? () => onFinish(value) : undefined}>
              <UI.Text color={colors.white} bold>
                CONFIRM
              </UI.Text>
            </UI.Button>
          </>
        )}
      </ActionSheet>
    );
  }
}

const styles = StyleSheet.create({
  keypadContainer: {
    paddingHorizontal: wd('10%'),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  keypad: {
    width: wd('15%'),
    height: wd('15%'),
  },
  headerComponent: {
    width: wd('12%'),
    height: 8,
    marginTop: 5,
    borderRadius: 10,
  },
  cell: {
    width: wd('16%'),
    height: hd('9%'),
    marginTop: 30,
  },
});

export default EnterPin;
