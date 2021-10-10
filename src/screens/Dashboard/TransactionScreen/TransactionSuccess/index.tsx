import {useTheme} from '@/contexts/ThemeContext';
import * as React from 'react';
import {Image, Modal} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import * as UI from '@/components/common';
import SVG from '@/components/SVG';
import styles from './styles';
import AppStatusBar from '@/components/AppStatusBar';

interface TransactionSuccessProps {
  onBackToHome: () => void;
  receipient?: {
    name: string;
    image: string;
    username: string;
    time: string;
  };
}

const TransactionSuccess: React.FC<TransactionSuccessProps> = ({
  onBackToHome,
  receipient,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <Modal animationType="fade">
        <AppStatusBar
          backgroundColor={colors.background}
          barStyle="dark-content"
        />

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

            <UI.Text h2>{receipient ? 'Success' : 'Request Sent'}</UI.Text>

            <UI.Spacer />

            <UI.Text note style={{textAlign: 'center'}} color={colors.gray2}>
              {receipient
                ? 'Your money was sent successfully'
                : 'Your request have been sent successfully. Awaiting response'}
            </UI.Text>
          </UI.Block>

          <UI.Spacer large />

          {receipient ? (
            <UI.Block>
              <UI.Text color={colors.gray2}>Receipient</UI.Text>
              <UI.Spacer />
              <UI.Block
                backgroundColor={colors.gray4}
                row
                justify="space-between"
                style={styles.merchant}>
                <UI.Block row width="auto" center>
                  <Image
                    style={styles.image}
                    source={{uri: receipient.image}}
                  />
                  <UI.Spacer />
                  <UI.Block width="auto">
                    <UI.Text bold>{receipient.name}</UI.Text>
                    <UI.Text note color={colors.gray1}>
                      {receipient.username}
                    </UI.Text>
                  </UI.Block>
                </UI.Block>
                <UI.Block width="auto" bottom>
                  <UI.Text note color={colors.gray2}>
                    {receipient.time}
                  </UI.Text>
                </UI.Block>
              </UI.Block>
            </UI.Block>
          ) : null}
        </UI.Layout>
        <UI.Block style={{paddingHorizontal: wd('4%')}}>
          <UI.Button primary onClick={onBackToHome}>
            <UI.Text bold color={colors.white}>
              BACK TO HOME
            </UI.Text>
          </UI.Button>

          <UI.Spacer large />
        </UI.Block>
      </Modal>
    </>
  );
};

export default TransactionSuccess;
