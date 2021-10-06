import React, {Component} from 'react';
import {StyleSheet, View, Text, TextStyle} from 'react-native';

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  leftWrap: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  rightWrap: {
    position: 'absolute',
  },

  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 1000,
  },

  innerCircle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#888',
  },
});

interface PercentageCircleProps {
  color?: string;
  bgcolor?: string;
  innerColor?: string;
  radius: number;
  percent: number;
  borderWidth?: number;
  textStyle?: TextStyle;
  disabled?: boolean;
  disabledText?: string;
}

interface PercentageCircleState {
  percent: number;
  borderWidth: number;
  leftTransformerDegree: string;
  rightTransformerDegree: string;
  textStyle: TextStyle;
}

class PercentageCircle extends Component<
  PercentageCircleProps,
  PercentageCircleState
> {
  constructor(props: PercentageCircleProps) {
    super(props);
    let {percent, borderWidth} = this.props;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if (percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
    } else {
      rightTransformerDegree = percent * 3.6 + 'deg';
      leftTransformerDegree = '0deg';
    }

    this.state = {
      percent,
      borderWidth: !borderWidth || borderWidth < 2 ? 2 : borderWidth,
      leftTransformerDegree,
      rightTransformerDegree,
      textStyle: this.props.textStyle ? this.props.textStyle : {},
    };
  }

  static getDerivedStateFromProps(props: PercentageCircleProps) {
    let percent = props.percent;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if (percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
    } else {
      rightTransformerDegree = percent * 3.6 + 'deg';
    }
    return {
      percent: props.percent,
      borderWidth:
        !props.borderWidth || props.borderWidth < 2 ? 2 : props.borderWidth,
      leftTransformerDegree: leftTransformerDegree,
      rightTransformerDegree: rightTransformerDegree,
    };
  }

  render() {
    const {
      disabled,
      disabledText,
      radius,
      bgcolor,
      color,
      innerColor,
      percent,
      children,
    } = this.props;
    const {leftTransformerDegree, rightTransformerDegree, borderWidth} =
      this.state;

    if (disabled) {
      return (
        <View
          style={[
            styles.circle,
            {
              width: radius * 2,
              height: radius * 2,
              borderRadius: radius,
            },
          ]}>
          <Text style={styles.text}>{disabledText}</Text>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.circle,
          {
            width: radius * 2,
            height: radius * 2,
            borderRadius: radius,
            backgroundColor: bgcolor,
          },
        ]}>
        <View
          style={[
            styles.leftWrap,
            {
              width: radius,
              height: radius * 2,
              left: 0,
            },
          ]}>
          <View
            style={[
              styles.loader,
              {
                left: radius,
                width: radius,
                height: radius * 2,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderRadius: 1000,
                backgroundColor: color,
                transform: [
                  {translateX: -radius / 2},
                  {rotate: leftTransformerDegree},
                  {translateX: radius / 2},
                ],
              },
            ]}
          />
        </View>
        <View
          style={[
            styles.leftWrap,
            {
              left: radius,
              width: radius,
              height: radius * 2,
            },
          ]}>
          <View
            style={[
              styles.loader,
              {
                left: -radius,
                width: radius,
                height: radius * 2,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: color,
                transform: [
                  {translateX: radius / 2},
                  {rotate: rightTransformerDegree},
                  {translateX: -radius / 2},
                ],
              },
            ]}
          />
        </View>
        <View
          style={[
            styles.innerCircle,
            {
              width: (radius - borderWidth) * 2,
              height: (radius - borderWidth) * 2,
              borderRadius: radius - borderWidth,
              backgroundColor: innerColor,
            },
          ]}>
          {children ? (
            children
          ) : (
            <Text style={[styles.text, this.state.textStyle]}>{percent}%</Text>
          )}
        </View>
      </View>
    );
  }
}

export default PercentageCircle;
