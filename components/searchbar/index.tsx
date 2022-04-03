import { View, TextInput, Image } from 'react-native';
import { whiteSmoke } from '../../constants/colors';
import { homePageText } from '../../constants/textContent';
import { searchIcon } from './../../assets/icons';
import { style } from './styles';

const SearchBar = () => {
  return (
    <View style={style.searchBar}>
      <Image source={searchIcon} style={style.image} />
      <TextInput
        style={style.searchBarInput}
        selectionColor={whiteSmoke}
        placeholder={homePageText.searchPlaceholder}
        placeholderTextColor={whiteSmoke}
        keyboardType='default'
        keyboardAppearance='dark'
        returnKeyType='search'
        onSubmitEditing={(e) => {
          console.log(e.nativeEvent.text);
        }}
      />
    </View>
  );
};

export default SearchBar;
