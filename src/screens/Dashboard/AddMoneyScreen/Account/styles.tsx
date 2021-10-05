import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  detailsBox: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: wd('5%'),
    paddingVertical: wd('7%'),
    borderStyle: 'dashed',
  },
  info: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
