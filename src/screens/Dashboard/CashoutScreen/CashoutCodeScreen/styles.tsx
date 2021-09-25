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
  codeContainer: {
    paddingHorizontal: wd('8%'),
    paddingVertical: hd('2%'),
    borderRadius: 20,
    borderWidth: 1.4,
  },
  qrcode: {
    padding: wd('5%'),
    borderRadius: 10,
    width: 'auto',
  },
});
