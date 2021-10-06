import React from 'react';
import {StatusBar, Image, SectionList} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {formatMoney} from '@/utils';
import LinearGradient from 'react-native-linear-gradient';
import SVG from '@/components/SVG';
import TransactionItem from '@/components/TransactionItem';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const [isLoading] = React.useState(false);
  const snapPoints = React.useMemo(() => ['25%', '45%', '95%'], []);

  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const DATA = [
    {
      title: 'Today',
      data: ['Princetech POS', 'Princetech POS', 'Princetech POS'],
    },
    {
      title: 'Yesterday, 24th May',
      data: ['Princetech POS', 'Princetech POS', 'Princetech POS'],
    },
    {
      title: '23rd Apr, 2021',
      data: ['Princetech POS', 'Princetech POS', 'Princetech POS'],
    },
    {
      title: '19 Apr, 2021',
      data: ['Princetech POS', 'Princetech POS'],
    },
  ];

  return (
    <>
      <StatusBar backgroundColor={colors.gray4} barStyle="dark-content" />

      <UI.Layout style={{backgroundColor: colors.gray4}}>
        <UI.Block>
          <UI.Block row center justify="space-between">
            <UI.Text h1>Home</UI.Text>
            <UI.Clickable
              onClick={() => navigation.navigate('Notifications')}
              style={[styles.notificationButton, {borderColor: colors.gray3}]}>
              <UI.Icon color={colors.text} name="notifications" />
            </UI.Clickable>
          </UI.Block>
        </UI.Block>

        <UI.Spacer />

        <UI.Block row center>
          <Image
            source={{uri: 'https://placekitten.com/100'}}
            style={styles.avatar}
          />
          <UI.Spacer />
          <UI.Text color={colors.gray2} body>
            Hello, Daze
          </UI.Text>
        </UI.Block>

        <UI.Spacer medium />

        <LinearGradient
          colors={[colors.green1, colors.green2]}
          style={[styles.balanceCard, {borderColor: colors.gray3}]}>
          <SVG name="masked-bg" containerStyle={styles.balanceCardMask} />
          <UI.Block center row justify="space-between">
            <UI.Text color={colors.gray3}>Available Cash</UI.Text>
            <UI.Clickable
              style={[styles.hideButton, {borderColor: colors.gray3}]}>
              <UI.Text color={colors.gray3}>Hide</UI.Text>
            </UI.Clickable>
          </UI.Block>

          <UI.Spacer />

          <UI.Block row>
            <UI.Text color={colors.white} h1 style={styles.balance}>
              {formatMoney('120000')}
            </UI.Text>
            <UI.Text style={styles.balancePoint} color={colors.gray3}>
              .00
            </UI.Text>
          </UI.Block>
        </LinearGradient>

        <UI.Spacer medium />

        <LinearGradient
          colors={[colors.orange1, colors.orange2]}
          style={[styles.balanceCard, {borderColor: colors.gray3}]}>
          <UI.Block row center justify="space-between">
            <UI.Text note color={colors.white}>
              Bonous Cash
            </UI.Text>
            <UI.Text h2 color={colors.white}>
              {formatMoney('50000')}
            </UI.Text>
          </UI.Block>
        </LinearGradient>

        <UI.Spacer medium />

        <UI.Block center>
          <UI.Clickable
            onClick={() => navigation.navigate('AddMoney')}
            style={[
              styles.addMoney,
              {backgroundColor: colors.white, borderColor: colors.gray3},
            ]}>
            <UI.Block center row>
              <UI.Block
                center
                middle
                style={styles.addMoneyPlus}
                backgroundColor={colors.green2}
                width="auto">
                <UI.Icon size={17} color={colors.white} name="add" />
              </UI.Block>
              <UI.Spacer />
              <UI.Text note color={colors.gray1}>
                Add Money
              </UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>
      </UI.Layout>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        enableContentPanningGesture={false}
        handleComponent={() => (
          <UI.Block center>
            <UI.Spacer size={3} />
            <SVG name="chevron-down" />
          </UI.Block>
        )}
        style={styles.transactionSheet}
        snapPoints={snapPoints}>
        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          onRefresh={() => {}}
          refreshing={isLoading}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <TransactionItem amount="5000" type="credit" title={item} />
          )}
          renderSectionHeader={({section: {title}}) => (
            <UI.Text color={colors.gray2} style={styles.header}>
              {title}
            </UI.Text>
          )}
          SectionSeparatorComponent={() => (
            <UI.Block style={[styles.seperator, {borderColor: colors.gray4}]} />
          )}
          ListFooterComponent={
            <UI.Block style={styles.listFooterContainer} center>
              <UI.Clickable>
                <UI.Block
                  backgroundColor={colors.gray4}
                  row
                  center
                  style={styles.listFooter}>
                  <SVG
                    containerStyle={{
                      width: 20,
                      height: 20,
                    }}
                    color={colors.gray1}
                    name="all-transactions"
                  />
                  <UI.Spacer size={3} />
                  <UI.Text body color={colors.gray1}>
                    Search all transactions
                  </UI.Text>
                </UI.Block>
              </UI.Clickable>
            </UI.Block>
          }
        />
      </BottomSheet>
    </>
  );
};

export default HomeScreen;
