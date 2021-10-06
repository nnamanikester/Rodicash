import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  profileImage: {
    width: wd('25%'),
    height: wd('25%'),
    borderRadius: 100,
  },
  cameraIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },
  profileCard: {
    padding: 20,
    borderRadius: 10,
  },
  leftIcon: {
    padding: 10,
    borderRadius: 10,
  },
  chatBox: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
});
