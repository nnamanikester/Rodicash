import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  availableCash: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1.4,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  tabContainer: {
    padding: 3,
    borderWidth: 1,
    borderRadius: 100,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 10,
  },
  tabText: {
    fontSize: hd('2.2%'),
  },
  selectButton: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: 'auto',
    borderRadius: 5,
  },
  contact: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  contactSearch: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignSelf: 'flex-start',
  },
});
