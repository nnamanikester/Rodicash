import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import * as UI from '../common';
import {useTheme} from '@/contexts/ThemeContext';

export interface SVGProps extends ViewProps {
  name: string;
  size?: string | number;
  color?: string;
  fill?: string;
  width?: string | number;
  height?: string | number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
}

interface IconProps extends ViewProps {
  fill: string;
  width: number | string;
  height: number | string;
  style: ViewStyle | undefined;
  color: string;
}

const SVG: React.FC<SVGProps> = ({
  name,
  size = 28,
  color,
  fill,
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
    case 'back':
      Icon = require('./Back').default;
      break;
    case 'contact':
      Icon = require('./Contact').default;
      break;
    case 'lock':
      Icon = require('./Lock').default;
      break;
    case 'phone':
      Icon = require('./Phone').default;
      break;
    case 'mail':
      Icon = require('./Mail').default;
      break;
    case 'nigerian-flag':
      Icon = require('./NigerianFlag').default;
      break;
    case 'error':
      Icon = require('./Error').default;
      break;
    case 'face-id':
      Icon = require('./FaceID').default;
      break;
    case 'finger-print':
      Icon = require('./FingerPrint').default;
      break;
    case 'ribons':
      Icon = require('./Ribons').default;
      break;
    case 'check-circle':
      Icon = require('./CheckCircle').default;
      break;
    case 'cashout':
      Icon = require('./Cashout').default;
      break;
    case 'home':
      Icon = require('./Home').default;
      break;
    case 'transactions':
      Icon = require('./Transactions').default;
      break;
    case 'map':
      Icon = require('./Map').default;
      break;
    case 'more':
      Icon = require('./More').default;
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
        fill={fill || colors.transparent}
        style={style}
        color={color || colors.gray2}
      />
    </View>
  );
};

export default SVG;