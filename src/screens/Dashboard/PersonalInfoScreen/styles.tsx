import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('4%'),
  },
  footer: {
    paddingHorizontal: wd('4%'),
  },
  countrySelect: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    left: -5,
  },
  picker: {
    // borderWidth: 1,
  },
  calendarBox: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
});
