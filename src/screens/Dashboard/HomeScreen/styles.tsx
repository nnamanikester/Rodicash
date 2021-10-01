import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

export default StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  notificationButton: {
    borderWidth: 1.4,
    borderRadius: 10,
    padding: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  balanceCard: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },
  balanceCardMask: {
    position: 'absolute',
    top: -80,
  },
  balance: {
    fontSize: hd('5%'),
    lineHeight: hd('7%'),
  },
  balancePoint: {
    fontSize: hd('3.5%'),
    lineHeight: hd('4%'),
  },
  hideButton: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 5,
  },
  addMoney: {
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  addMoneyPlus: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
  transactionSheet: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    elevation: 2,
    shadowColor: '#0005',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
});
