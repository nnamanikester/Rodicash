import {useTheme} from '@/contexts/ThemeContext';
import * as React from 'react';
import {Modal, StatusBar} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import * as UI from '../common';
import SVG from '../SVG';

interface RegistrationSuccessfulProps {
  onContinue: () => void;
}

const RegistrationSuccessful: React.FC<RegistrationSuccessfulProps> = ({
  onContinue,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <Modal animationType="fade">
        <SVG name="ribons" width="100%" height={hd('25%')} />
        <UI.Layout noScroll>
          <UI.Block center style={{paddingHorizontal: wd('5%')}}>
            <SVG
              containerStyle={{
                width: wd('35%'),
                height: wd('35%'),
              }}
              name="check-circle"
              size={wd('50%')}
            />
            <UI.Spacer large />
            <UI.Spacer large />
            <UI.Text h2>Congrats, You're in!</UI.Text>

            <UI.Spacer />

            <UI.Text style={{textAlign: 'center'}} color={colors.gray2}>
              You have transfer was successful and on it’s way.
            </UI.Text>
          </UI.Block>
        </UI.Layout>
        <UI.Block style={{paddingHorizontal: wd('4%')}}>
          <UI.Button primary onClick={onContinue}>
            <UI.Text bold color={colors.white}>
              PROCEED
            </UI.Text>
          </UI.Button>

          <UI.Spacer large />
        </UI.Block>
      </Modal>
    </>
  );
};

export default RegistrationSuccessful;
