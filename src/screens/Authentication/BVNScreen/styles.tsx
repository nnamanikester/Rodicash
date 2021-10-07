import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  footer: {
    paddingHorizontal: wd('4%'),
  },
  showButton: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});
