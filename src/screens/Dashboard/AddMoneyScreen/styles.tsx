import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  tabContainer: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 100,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
  },
  tabText: {
    fontSize: isIOS ? hd('1.8%') : hd('2.2%'),
  },
  headerComponent: {
    width: wd('12%'),
    height: 8,
    marginTop: 5,
    borderRadius: 10,
  },
  actionSheetContainer: {
    paddingHorizontal: wd('5%'),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});
