import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('5%'),
  },
  footer: {
    paddingHorizontal: wd('5%'),
  },
  cell: {
    width: wd('16%'),
    height: hd('9%'),
    marginTop: 30,
  },
});
