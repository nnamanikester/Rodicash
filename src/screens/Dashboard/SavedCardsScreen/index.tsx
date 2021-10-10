import * as React from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import {useTheme} from '@/contexts/ThemeContext';
import * as UI from '@/components/common';
import styles from './styles';
import SVG from '@/components/SVG';
import AppStatusBar from '@/components/AppStatusBar';

interface SavedCardsScreenProps {
  navigation: any;
}

const SavedCardsScreen: React.FC<SavedCardsScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const cards = React.useMemo(
    () => [
      {
        id: '1',
        name: 'NNAMANI JOHN',
        lastDigit: '4779',
        expDate: '10/25',
        primary: true,
      },
      {
        id: '2',
        name: 'NNAMANI JOHN',
        lastDigit: '5684',
        expDate: '10/24',
        primary: false,
      },
    ],
    [],
  );

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.goBack()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>
      <UI.Block
        flex
        backgroundColor={colors.background}
        style={{paddingHorizontal: wd('4%')}}>
        <UI.Text h1>Saved Cards</UI.Text>
        <UI.Spacer large />

        {!cards.length && (
          <UI.Block flex middle style={{paddingHorizontal: wd('12%')}}>
            <UI.Text h2 style={{textAlign: 'center'}}>
              You have no saved cards
            </UI.Text>
            <UI.Text color={colors.gray1} note style={{textAlign: 'center'}}>
              Cards that you’ve used to fund your account will show up here
            </UI.Text>
          </UI.Block>
        )}

        {cards.length && (
          <FlatList
            data={cards}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item: {primary, name, lastDigit, expDate}}) => (
              <>
                <LinearGradient
                  colors={
                    primary
                      ? [colors.orange1, colors.orange2]
                      : [colors.gray1, colors.gray1]
                  }
                  style={[styles.card]}>
                  <UI.Block right>
                    <SVG
                      containerStyle={{
                        height: 40,
                      }}
                      name="double-circle"
                    />
                  </UI.Block>
                  <UI.Block row center>
                    <UI.Text h1 color={colors.white}>
                      ****
                    </UI.Text>
                    <UI.Spacer />
                    <UI.Text h1 color={colors.white}>
                      ****
                    </UI.Text>
                    <UI.Spacer />
                    <UI.Text h1 color={colors.white}>
                      ****
                    </UI.Text>
                    <UI.Spacer />
                    <UI.Text h1 color={colors.white}>
                      {lastDigit}
                    </UI.Text>
                  </UI.Block>

                  <UI.Spacer large />

                  <UI.Block row>
                    <UI.Block width="auto">
                      <UI.Text color={colors.white}>EXP</UI.Text>
                      <UI.Text color={colors.white} bold>
                        {expDate}
                      </UI.Text>
                    </UI.Block>

                    <UI.Spacer large />

                    <UI.Block width="auto">
                      <UI.Text color={colors.white}>CVV</UI.Text>
                      <UI.Text color={colors.white} bold>
                        ***
                      </UI.Text>
                    </UI.Block>

                    <UI.Spacer large />

                    <UI.Block width="auto">
                      <UI.Text color={colors.white}>CARD NAME</UI.Text>
                      <UI.Text color={colors.white} bold>
                        {name}
                      </UI.Text>
                    </UI.Block>
                  </UI.Block>
                </LinearGradient>
                <UI.Spacer />
              </>
            )}
          />
        )}
      </UI.Block>
    </>
  );
};

export default SavedCardsScreen;
