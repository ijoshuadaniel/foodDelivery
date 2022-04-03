import { whiteSmoke, sienna } from './../../constants/colors';
import { StyleSheet } from 'react-native';
import { wp, hp } from '../../constants/responsive';

export const style = StyleSheet.create({
  home: {
    width: '92%',
    height: hp('100%'),
    margin: wp('3'),
  },
  banner: {
    width: '100%',
    height: '20%',
    marginBottom: wp('5'),
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderWidth: 0.2,
    borderColor: whiteSmoke,
    borderRadius: wp(5),
  },
  homeChefs: {},
  homeChefsText: {
    color: whiteSmoke,
  },
});
