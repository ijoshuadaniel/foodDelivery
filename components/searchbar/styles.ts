import { StyleSheet } from 'react-native';
import { whiteSmoke } from '../../constants/colors';
import { wp, hp } from '../../constants/responsive';

export const style = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: whiteSmoke,
    borderWidth: 0.3,
    borderRadius: wp('5'),
    paddingHorizontal: wp('3'),
  },
  searchBarInput: {
    width: wp('80%'),
    height: hp('5'),
    padding: 10,
    color: whiteSmoke,
  },
  image: {
    width: wp('5'),
    height: wp('5'),
  },
});
