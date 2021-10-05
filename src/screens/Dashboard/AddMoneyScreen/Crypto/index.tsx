import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {SlideX} from '@/animations';

interface CryptoProps {}

const Crypto: React.FC<CryptoProps> = () => {
  const {colors} = useTheme();

  return (
    <SlideX from={500} to={0} duration={200} style={{flex: 1}}>
      <UI.Block center style={{paddingHorizontal: wd('4%')}}>
        <UI.Spacer large />
        <UI.Spacer large />

        <UI.Text h1>Convert crypto to cash</UI.Text>

        <UI.Spacer />

        <UI.Text color={colors.gray2} style={{textAlign: 'center'}}>
          Fund your rodicash wallet with cryptocurrencies
        </UI.Text>

        <UI.Spacer large />

        <UI.Block>
          <UI.Button type="disabled">
            <UI.Text bold color={colors.white}>
              COMING SOON!
            </UI.Text>
          </UI.Button>
        </UI.Block>
      </UI.Block>
    </SlideX>
  );
};

export default Crypto;
