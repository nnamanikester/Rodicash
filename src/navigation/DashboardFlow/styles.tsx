import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  centerTab: {
    borderRadius: 100,
    height: hd('7%'),
    width: hd('7%'),
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
