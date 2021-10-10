import React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ActionSheet from 'react-native-actions-sheet';
import Help from './Help';
import Account from './Account';
import Card from './Card';
import Crypto from './Crypto';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import AppStatusBar from '@/components/AppStatusBar';

interface AddMoneyScreenProps {
  navigation: any;
}

const AddMoneyScreen: React.FC<AddMoneyScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const actionSheetRef = React.useRef<ActionSheet>(null);
  const tabColors = React.useMemo(
    () => ({
      active: [colors.orange1, colors.orange2],
      inactive: [colors.transparent, colors.transparent],
    }),
    [],
  );

  const [tab, setTab] = React.useState<'account' | 'card' | 'crypto'>(
    'account',
  );

  const showHelp = (): void => {
    actionSheetRef.current?.setModalVisible(true);
  };

  const hideHelp = (): void => {
    actionSheetRef.current?.setModalVisible(false);
  };

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />
      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.pop()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Block
        backgroundColor={colors.background}
        style={{paddingHorizontal: wd('4%')}}>
        <UI.Spacer />

        <UI.Block row center justify="space-between">
          <UI.Text h1>Add Money</UI.Text>
          <UI.Clickable onClick={showHelp}>
            <UI.Text color={colors.secondary} note>
              Need more help?
            </UI.Text>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer large />

        <UI.Block
          row
          backgroundColor={colors.gray4}
          style={[styles.tabContainer, {borderColor: colors.gray3}]}>
          <UI.Clickable
            onClick={setTab.bind(null, 'account')}
            style={{flex: 1}}>
            <LinearGradient
              style={styles.tab}
              colors={
                tab === 'account' ? tabColors.active : tabColors.inactive
              }>
              <UI.Text
                style={styles.tabText}
                color={tab === 'account' ? colors.white : colors.gray2}
                bold>
                Account
              </UI.Text>
            </LinearGradient>
          </UI.Clickable>
          <UI.Clickable onClick={setTab.bind(null, 'card')} style={{flex: 1}}>
            <LinearGradient
              style={styles.tab}
              colors={tab === 'card' ? tabColors.active : tabColors.inactive}>
              <UI.Text
                color={tab === 'card' ? colors.white : colors.gray2}
                style={styles.tabText}
                bold>
                Card
              </UI.Text>
            </LinearGradient>
          </UI.Clickable>
          <UI.Clickable onClick={setTab.bind(null, 'crypto')} style={{flex: 1}}>
            <LinearGradient
              style={styles.tab}
              colors={tab === 'crypto' ? tabColors.active : tabColors.inactive}>
              <UI.Text
                color={tab === 'crypto' ? colors.white : colors.gray2}
                style={styles.tabText}
                bold>
                Crypto
              </UI.Text>
            </LinearGradient>
          </UI.Clickable>
        </UI.Block>
      </UI.Block>

      <UI.Layout>
        {tab === 'account' && <Account />}
        {tab === 'card' && <Card />}
        {tab === 'crypto' && <Crypto />}

        <ActionSheet
          ref={actionSheetRef}
          gestureEnabled
          CustomHeaderComponent={
            <UI.Block
              backgroundColor={colors.gray3}
              center
              style={styles.headerComponent}
            />
          }
          containerStyle={styles.actionSheetContainer}>
          <UI.Spacer />
          <UI.Block right>
            <UI.Clickable onClick={hideHelp}>
              <UI.Icon
                size={20}
                color={colors.gray2}
                name="closecircleo"
                type="AntDesign"
              />
            </UI.Clickable>
          </UI.Block>
          <Help />
        </ActionSheet>
      </UI.Layout>
    </>
  );
};

export default AddMoneyScreen;
