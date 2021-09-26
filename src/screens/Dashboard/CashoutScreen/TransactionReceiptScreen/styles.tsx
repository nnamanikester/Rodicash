import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    padding: wd('5%'),
  },
  box: {
    borderRadius: 20,
  },
  merchant: {
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: wd('10%'),
    height: wd('10%'),
    borderRadius: 100,
  },
  dottedDivider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  dotLeft: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10,
    left: -25,
    borderRadius: 10,
  },
  dotRight: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10,
    right: -25,
    borderRadius: 10,
  },
  dotBottom: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 3,
    top: 8,
  },
});
