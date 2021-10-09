import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  footer: {
    paddingHorizontal: wd('4%'),
  },
  card: {
    paddingHorizontal: wd('5%'),
    paddingVertical: 20,
    borderRadius: 10,
  },
});
