import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  swipe: {
    height: hd('95%'),
    position: 'relative',
    justifyContent: 'space-between',
    bottom: 0,
  },
  dot: {
    width: wd('7%'),
    height: 7,
    borderRadius: 10,
    marginRight: -10,
  },
  activeDot: {
    width: wd('7%'),
    height: 7,
    borderRadius: 10,
    marginRight: -10,
    zIndex: 1,
  },
  dotContainer: {
    paddingBottom: hd('37%'),
    position: 'absolute',
  },
  bgLines: {
    position: 'absolute',
  },
  illustratinoBg: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hd('5'),
  },
  illustrationContainer: {
    top: hd('13%'),
  },
  content: {
    paddingHorizontal: 20,
    bottom: hd('19%'),
  },
});
