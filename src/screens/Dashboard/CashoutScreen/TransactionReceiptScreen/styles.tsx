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
    width: 22,
    height: 22,
    position: 'absolute',
    top: -10,
    left: -30,
    borderRadius: 10,
  },
  dotRight: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: -10,
    right: -30,
    borderRadius: 10,
  },
  dotBottom: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 3,
    top: 8,
  },
  headerComponent: {
    width: wd('12%'),
    height: 8,
    marginTop: 5,
    borderRadius: 10,
  },
  actionSheetContainer: {
    paddingHorizontal: wd('5%'),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  customerSupport: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
