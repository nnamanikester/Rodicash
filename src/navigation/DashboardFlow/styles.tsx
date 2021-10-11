import {Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  centerTab: {
    borderRadius: 100,
    height: isIOS ? hd('6%') : hd('7%'),
    width: isIOS ? hd('6%') : hd('7%'),
  },
  tab: {
    width: 'auto',
    height: '100%',
    justifyContent: 'center',
  },
  tabActive: {
    borderTopWidth: 3,
  },
});
