import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

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
  image: {
    width: wd('20%'),
    height: wd('20'),
    borderRadius: 100,
  },
  imageLayer1: {
    padding: 10,
    width: 'auto',
    borderRadius: 100,
  },
  imageLayer2: {
    padding: 10,
    width: 'auto',
    borderRadius: 100,
  },
  nameContainer: {
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  description: {
    padding: wd('5%'),
    borderTopWidth: 1,
  },
  divider: {
    borderBottomWidth: 1,
  },
  dottedDivider: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
  },
  total: {
    fontSize: hd('4%'),
    lineHeight: hd('8%'),
  },
});
