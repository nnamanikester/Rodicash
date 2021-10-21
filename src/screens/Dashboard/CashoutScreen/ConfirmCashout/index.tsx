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
import SwipeButton from 'rn-swipe-button';
import {formatMoney, formatMoneyWithoutSymbol} from '@/utils';
import EnterPin from '@/components/EnterPin';
import AppStatusBar from '@/components/AppStatusBar';

interface ConfirmCashoutProps {
  navigation: any;
}

const enterPinRef = React.createRef<EnterPin>();

const ConfirmCashout: React.FC<ConfirmCashoutProps> = ({navigation}) => {
  const {colors} = useTheme();

  const handlePinConfirmation = (): void => {
    enterPinRef.current?.hide();
    navigation.navigate('TransactionReceipt');
  };

  const SwipeIcon = () => {
    return (
      <UI.Icon testID="swipe_icon" name="arrow-forward" color={colors.white} />
    );
  };

  return (
    <>
      <AppStatusBar backgroundColor={colors.primary} barStyle="light-content" />

      <LinearGradient
        style={styles.background}
        colors={[colors.primary, colors.green2]}>
        <SVG name="masked-bg" containerStyle={{position: 'absolute'}} />
        <UI.Clickable onClick={() => navigation.goBack()}>
          <UI.Block center style={styles.header} row>
            <UI.Icon name="chevron-back-circle-outline" color={colors.gray4} />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray4}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
        <UI.Layout style={{backgroundColor: 'transparent'}}>
          <UI.Text h1 color={colors.white}>
            Confirm Withdrawal.
          </UI.Text>
          <UI.Spacer large />

          <UI.Block style={styles.box} backgroundColor={colors.white}>
            <UI.Block style={{padding: wd('5%')}}>
              <UI.Text note color={colors.secondary}>
                Cashing out with:
              </UI.Text>

              <UI.Spacer medium />

              <UI.Block center>
                <UI.Block
                  backgroundColor={colors.gray4}
                  center
                  style={styles.imageLayer1}>
                  <UI.Block
                    center
                    backgroundColor="#EAF0F6"
                    style={[styles.imageLayer2]}>
                    <Image
                      style={styles.image}
                      source={{uri: 'https://placekitten.com/200'}}
                    />
                  </UI.Block>
                </UI.Block>

                <UI.Spacer />

                <UI.Block
                  style={[styles.nameContainer, {borderColor: colors.gray4}]}
                  center
                  width="auto">
                  <UI.Text body>Kester Nnamani</UI.Text>
                  <UI.Text note color={colors.gray1}>
                    Merchant
                  </UI.Text>
                </UI.Block>
              </UI.Block>
            </UI.Block>

            <UI.Block style={[styles.description, {borderColor: colors.gray4}]}>
              <UI.Block row justify="space-between">
                <UI.Text>Cash withdrawal</UI.Text>
                <UI.Text bold>{formatMoneyWithoutSymbol('3000')}.00</UI.Text>
              </UI.Block>

              <UI.Spacer />

              <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

              <UI.Spacer />

              <UI.Block row justify="space-between">
                <UI.Text>Fee(fixed)</UI.Text>
                <UI.Text bold>{formatMoneyWithoutSymbol('100')}.00</UI.Text>
              </UI.Block>
            </UI.Block>
            <UI.Block
              style={[styles.dottedDivider, {borderColor: colors.gray3}]}
            />

            <UI.Spacer medium />

            <UI.Block center>
              <UI.Text color={colors.gray1}>Total</UI.Text>
              <UI.Text style={styles.total} h1>
                {formatMoney('3100')}.00
              </UI.Text>
            </UI.Block>

            <UI.Spacer />
          </UI.Block>

          <UI.Spacer large />

          <UI.Block>
            <SwipeButton
              containerStyles={{borderWidth: 0}}
              height={hd('7%')}
              onSwipeSuccess={() => {
                enterPinRef.current?.show();
              }}
              railBackgroundColor={colors.transparent}
              shouldResetAfterSuccess
              swipeSuccessThreshold={7}
              thumbIconComponent={SwipeIcon}
              thumbIconStyles={{borderWidth: 0}}
              railFillBackgroundColor={colors.transparent}
              thumbIconBackgroundColor={colors.secondary}
              title="SWIPE TO CONFIRM"
              titleStyles={{
                fontFamily: 'Gordita-Bold',
                fontSize: hd('1.8%'),
                color: colors.white,
              }}
            />
          </UI.Block>

          <UI.Spacer large />

          <EnterPin
            ref={enterPinRef}
            onChangeValue={() => {}}
            maxLength={4}
            onFinish={handlePinConfirmation}
          />
        </UI.Layout>
      </LinearGradient>
    </>
  );
};

export default ConfirmCashout;
