import React from 'react';
import * as UI from '@/components/common';
import SVG from '@/components/SVG';
import {useTheme} from '@/contexts/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Image} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import {formatMoney} from '@/utils';
import ActionSheet from 'react-native-actions-sheet';
import RateMerchant from '../RateMerchant';
import AppStatusBar from '@/components/AppStatusBar';

interface TransactionReceiptProps {
  navigation: any;
}

const TransactionReceipt: React.FC<TransactionReceiptProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const actionSheetRef = React.useRef<ActionSheet>(null);

  const showRating = () => {
    actionSheetRef.current?.setModalVisible(true);
  };

  const hideRating = () => {
    actionSheetRef.current?.setModalVisible(false);
  };

  return (
    <>
      <AppStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <LinearGradient
        style={styles.background}
        colors={[colors.primary, colors.green2]}>
        <SVG name="masked-bg" containerStyle={{position: 'absolute'}} />
        <UI.Layout style={{backgroundColor: 'transparent'}}>
          <UI.Block style={styles.box} backgroundColor={colors.white}>
            <UI.Block style={{padding: wd('5%')}}>
              <UI.Block center>
                <UI.Text h1>Congrats!</UI.Text>
                <UI.Text color={colors.gray2} style={{textAlign: 'center'}}>
                  Your money has been recieved successfully, kindly collect your
                  cash
                </UI.Text>
              </UI.Block>

              <UI.Spacer />

              <UI.Block center>
                <SVG
                  name="ribons"
                  width={wd('80%')}
                  height={hd('20%')}
                  containerStyle={{marginLeft: -10}}
                />
                <SVG
                  containerStyle={{
                    width: wd('35%'),
                    height: wd('35%'),
                    marginTop: -40,
                  }}
                  name="check-circle"
                  size={wd('50%')}
                />
              </UI.Block>

              <UI.Spacer />

              <UI.Block center>
                <UI.Text color={colors.gray2}>Total transfer</UI.Text>
                <UI.Text h1>{formatMoney('3100')}.00</UI.Text>
              </UI.Block>

              <UI.Spacer large />

              <UI.Block>
                <UI.Block backgroundColor="#2CA981" style={styles.dotLeft} />
                <UI.Block
                  style={[styles.dottedDivider, {borderColor: colors.gray3}]}
                />
                <UI.Block backgroundColor="#2CA981" style={styles.dotRight} />
              </UI.Block>

              <UI.Spacer medium />

              <UI.Text note color={colors.gray2}>
                Merchant
              </UI.Text>

              <UI.Spacer />

              <UI.Block
                backgroundColor={colors.gray4}
                row
                justify="space-between"
                style={styles.merchant}>
                <UI.Block row width="auto" center>
                  <Image
                    style={styles.image}
                    source={{uri: 'https://placekitten.com/200'}}
                  />
                  <UI.Spacer />
                  <UI.Block width="auto">
                    <UI.Text bold>Kester Nnamani</UI.Text>
                    <UI.Text note color={colors.gray1}>
                      536D-HY74-73GZ
                    </UI.Text>
                  </UI.Block>
                </UI.Block>
                <UI.Block width="auto" bottom>
                  <UI.Text note color={colors.gray2}>
                    9:00AM
                  </UI.Text>
                </UI.Block>
              </UI.Block>
            </UI.Block>

            <UI.Spacer />

            <UI.Block style={{paddingHorizontal: 20}}>
              <UI.Button secondary onClick={showRating}>
                <UI.Text bold color={colors.white}>
                  RATE MERCHANT
                </UI.Text>
              </UI.Button>

              <UI.Spacer medium />

              <UI.Block center>
                <UI.Link
                  onClick={() => navigation.replace('Home')}
                  color={colors.primary}>
                  Back to home
                </UI.Link>
              </UI.Block>
            </UI.Block>

            <UI.Spacer large />

            <UI.Block middle row style={{paddingHorizontal: 20}}>
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
              <UI.Block
                style={styles.dotBottom}
                backgroundColor={colors.green2}
              />
            </UI.Block>
          </UI.Block>

          <UI.Spacer large />

          <ActionSheet
            ref={actionSheetRef}
            gestureEnabled
            closeOnTouchBackdrop={false}
            CustomHeaderComponent={
              <UI.Block
                backgroundColor={colors.gray3}
                center
                style={styles.headerComponent}
              />
            }
            containerStyle={styles.actionSheetContainer}>
            <UI.Spacer />
            <UI.Block row center justify="space-between">
              <UI.Clickable>
                <UI.Block
                  style={[
                    styles.customerSupport,
                    {borderColor: colors.secondary},
                  ]}>
                  <UI.Text color={colors.secondary} note>
                    Customer Support
                  </UI.Text>
                </UI.Block>
              </UI.Clickable>

              <UI.Clickable onClick={hideRating}>
                <UI.Icon
                  size={20}
                  color={colors.gray2}
                  name="closecircleo"
                  type="AntDesign"
                />
              </UI.Clickable>
            </UI.Block>
            <RateMerchant />
          </ActionSheet>
        </UI.Layout>
      </LinearGradient>
    </>
  );
};

export default TransactionReceipt;
