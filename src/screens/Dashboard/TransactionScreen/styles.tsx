import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  modalHeader: {
    padding: wd('4%'),
  },
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
    fontSize: isIOS ? hd('1.8%') : hd('2.2%'),
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
    width: 40,
    height: 40,
  },
  searchForm: {
    borderRadius: 100,
    paddingLeft: 45,
  },
  inviteAvatar: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  divider: {
    borderBottomWidth: 1,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
