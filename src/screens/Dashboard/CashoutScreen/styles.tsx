import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    padding: wd('5%'),
  },
  notificationButton: {
    borderWidth: 1.4,
    borderRadius: 10,
    padding: 5,
  },
  output: {
    padding: 10,
  },
  outputText: {
    fontSize: hd('4%'),
    lineHeight: hd('7%'),
  },
  outputTextContainer: {
    width: 'auto',
    margin: 10,
    marginRight: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1.5,
  },
  fee: {
    width: 'auto',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
