import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  merchant: {
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: wd('10%'),
    height: wd('10%'),
    borderRadius: 100,
  },
});
