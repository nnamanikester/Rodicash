import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import QRCode, {QRCodeProps} from 'react-native-qrcode-svg';
import * as UI from '../common';

const logo = require('../../../assets/images/icon.png');

interface RodiCodeProps extends QRCodeProps {}

const RodiCode: React.FC<RodiCodeProps> = props => {
  const {colors} = useTheme();

  return (
    <UI.Block
      backgroundColor={colors.background}
      width="auto"
      style={{padding: 10}}>
      <QRCode {...props} logo={logo} logoBackgroundColor={colors.white} />
    </UI.Block>
  );
};

export default RodiCode;
