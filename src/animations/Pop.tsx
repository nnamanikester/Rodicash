import * as React from 'react';
import {Animated} from 'react-native';
import * as UI from '@/components/common';

interface PopProps {
  from: number;
  to: number;
  delay?: number;
  speed?: number;
  style?: any;
  onClick?: (() => void) | undefined;
}

interface PopState {
  animate: Animated.Value;
}

class Pop extends React.Component<PopProps, PopState> {
  constructor(props: PopProps) {
    super(props);
    this.state = {
      animate: new Animated.Value(props.from),
    };
  }

  pop = (): void => {
    const {onClick, to, delay, from, speed} = this.props;
    const {animate} = this.state;
    Animated.spring(animate, {
      toValue: to,
      delay: delay || 0,
      speed: speed || 1000,
      useNativeDriver: true,
    }).start(() => {
      animate.setValue(from);
    });

    onClick ? onClick() : null;
  };

  onPressIn = (): void => {
    const {to, delay, speed} = this.props;
    const {animate} = this.state;
    Animated.spring(animate, {
      toValue: to,
      delay: delay || 0,
      speed: speed || 500,
      useNativeDriver: true,
    }).start();
  };

  onPressOut = (): void => {
    const {from} = this.props;
    const {animate} = this.state;

    animate.setValue(from);
  };
  render() {
    const {children, style, onClick} = this.props;
    const {animate} = this.state;

    const animStyle = {
      transform: [
        {
          scale: animate,
        },
      ],
      ...style,
    };

    return (
      <Animated.View style={animStyle}>
        <UI.Clickable
          onPressIn={this.onPressIn}
          onPressOut={this.onPressOut}
          onClick={onClick}>
          {children}
        </UI.Clickable>
      </Animated.View>
    );
  }
}

export {Pop};
