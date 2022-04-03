import { StyleSheet } from 'react-native';
import { sienna, whiteSmoke, darkSlateGrey } from '../../constants/colors';
import { wp, hp } from '../../constants/responsive';

export const style = StyleSheet.create({
  navigator: {
    backgroundColor: darkSlateGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    color: sienna,
  },
  tabView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  text: {
    color: whiteSmoke,
    marginTop: hp(1),
  },
  focusedText: {
    color: sienna,
    marginTop: hp(1),
  },
  image: { width: wp(5), height: wp(5) },
});
