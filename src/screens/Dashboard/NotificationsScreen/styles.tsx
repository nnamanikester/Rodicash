import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  promo: {
    borderRadius: 10,
    padding: 10,
  },
  promoIcon: {
    borderRadius: 10,
    padding: 10,
  },
  promoStatus: {
    width: 13,
    height: 13,
    borderWidth: 2,
    borderRadius: 13,
    position: 'absolute',
    right: -2,
  },
});
