import {Platform, StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
  },
  timelineTitle: {
    fontFamily: 'Gordita-Regular',
    fontWeight: 'normal',
    fontSize: isIOS ? hd('1.8%') : hd('2.3%'),
    lineHeight: isIOS ? hd('2.2%') : hd('2.4%'),
    marginTop: -10,
    marginBottom: 10,
  },
});
