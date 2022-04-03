import { StyleSheet } from 'react-native';
import { sienna, whiteSmoke } from '../../constants/colors';
import { wp, hp } from '../../constants/responsive';

export const style = StyleSheet.create({
  headerView: {
    width: wp('100%'),
    height: hp('5'),
    borderColor: whiteSmoke,
    borderBottomWidth: 0.2,
    padding: wp('3'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: whiteSmoke,
    marginLeft: wp('2'),
  },
  image: {
    width: wp('5'),
    height: wp('5'),
  },
});
