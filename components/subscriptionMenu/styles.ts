import { StyleSheet } from 'react-native';
import { sienna, whiteSmoke } from '../../constants/colors';
import { wp, hp } from '../../constants/responsive';

export const style = StyleSheet.create({
  subscription: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: wp('5'),
  },
  subscriptionMenu: {
    width: wp(92 / 4 + '%'),
    height: wp(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.2,
    borderColor: whiteSmoke,
    padding: wp(2),
  },
  subscriptionMenuImageWrapper: {
    width: wp(15),
    height: wp(15),
    borderWidth: 1,
    borderColor: whiteSmoke,
    padding: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(25),
  },
  subscriptionMenuImage: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  subscriptionMenuText: {
    color: whiteSmoke,
    marginTop: wp(2),
    justifyContent: 'center',
    textAlign: 'center',
  },
  showMore: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  showMoreText: {
    color: sienna,
    margin: wp(3),
  },
});
