import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  View,
  SafeAreaView,
  ViewProps,
  StatusBar,
} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export interface LayoutProps extends ViewProps {
  /**
   * Index of the item to float on the top of the screen onScroll.
   */
  itemsToFloat?: number[];
  /**
   * If `true`, the element layout won't be Scrollable. Default id `false`.
   */
  noScroll?: boolean;
  /**
   * Invoked when a the user scrolls to the bottom of the scrollview
   */
  onEndReached?: () => void | undefined;
  /**
   * Invoked when the view start refreshing
   */
  onRefresh?: () => void | Promise<void> | undefined;
  /**
   * Whether the view should be indicating an active refresh
   */
  refreshing?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  itemsToFloat = [],
  style = {},
  noScroll = false,
  onRefresh = () => {},
  refreshing = false,
}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: wd('6%'),
      backgroundColor: '#FFFDFD',
    },
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {noScroll ? (
        <SafeAreaView style={{flex: 1}}>
          <View style={[styles.container, style]}>{children}</View>
        </SafeAreaView>
      ) : (
        <>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  colors={['#2614c1']}
                  onRefresh={onRefresh}
                  refreshing={refreshing}
                  progressBackgroundColor="#fff"
                />
              }
              scrollEventThrottle={400}
              stickyHeaderIndices={[...itemsToFloat]}
              showsVerticalScrollIndicator={false}
              bounces
              style={[styles.container, style]}>
              {children}
            </ScrollView>
          </SafeAreaView>
        </>
      )}
    </>
  );
};
