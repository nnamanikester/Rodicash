import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
  },
  timelineTitle: {
    fontFamily: 'Gordita-Regular',
    fontWeight: 'normal',
    fontSize: hd('2.3%'),
    marginTop: -10,
    marginBottom: 10,
  },
});
