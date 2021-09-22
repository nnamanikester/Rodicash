import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('5%'),
  },
  footer: {
    paddingHorizontal: wd('5%'),
  },
  showButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  avatar: {
    width: wd('13%'),
    height: wd('13%'),
    borderRadius: wd('13%'),
  },
});
