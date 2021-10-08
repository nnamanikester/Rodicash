import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  footer: {
    paddingHorizontal: wd('4%'),
  },
  refCode: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
