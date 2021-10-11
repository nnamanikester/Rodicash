import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  mapView: {
    width: wd('100%'),
    height: '100%',
  },
  header: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: wd('4%'),
    paddingTop: 10,
  },
  search: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  mapMarker: {
    width: 30,
    height: 30,
  },
  merchantImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  merchantBox: {
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: hd('5%'),
    width: wd('90%'),
    alignSelf: 'center',
    padding: 15,
  },
  badgeBtn: {
    height: 30,
    width: 90,
  },
  divider: {
    height: '100%',
    width: 0,
    borderRightWidth: 1,
    backgroundColor: 'red',
  },
});
