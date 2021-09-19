import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import * as UI from '../common';
import {useTheme} from '@/contexts/ThemeContext';

export interface SVGProps extends ViewProps {
  name: string;
  size?: string | number;
  color?: string;
  width?: string | number;
  height?: string | number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

interface IconProps extends ViewProps {
  fill: any;
  width: number | string;
  height: number | string;
  style: ViewStyle | undefined;
}

const SVGIcon: React.FC<SVGProps> = ({
  name,
  size = 28,
  color,
  style,
  width,
  height,
  containerStyle,
}) => {
  let Icon: React.FC<IconProps> = (props: any) => <View {...props} />;

  const {colors} = useTheme();

  switch (name) {
    case 'background-lines':
      Icon = require('./BackgroundLines').default;
      break;
    case 'illustration-background':
      Icon = require('./IllustrationBackground').default;
      break;
    default:
      Icon = () => <UI.Text color="red">??</UI.Text>;
      break;
  }

  return (
    <View style={containerStyle}>
      <Icon
        width={width || size}
        height={height || size}
        fill={color || colors.transparent}
        style={style}
      />
    </View>
  );
};

export default SVGIcon;
