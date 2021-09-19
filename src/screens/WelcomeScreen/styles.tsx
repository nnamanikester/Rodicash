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
    alignItems: 'flex-end',
    height: hd('100%'),
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
    top: hd('10%'),
  },
});
