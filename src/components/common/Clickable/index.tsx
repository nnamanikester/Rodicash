import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

export interface ClickableProps extends TouchableOpacityProps {
  /**
   * Invoked when a click event is performed.
   */
  onClick?: ((event: GestureResponderEvent) => void) | undefined;
  style?: any;
}

/**
 * A component for createing an area that can be clickable. Can be used to
 * create a button or any other clickable. Accepts all react native TouchableOpacity
 * props except `onPress` and `activeOpacity`. `onPress` is replaced with `onClick`
 */
export const Clickable: React.FC<ClickableProps> = props => {
  const {onClick, children, style} = props;

  return (
    <TouchableOpacity
      style={style}
      onPress={onClick}
      activeOpacity={0.9}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};
