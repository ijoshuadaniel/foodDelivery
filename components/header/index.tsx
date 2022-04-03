import { View, Text, Image, TouchableOpacity } from 'react-native';
import { pin, shoppingCart, leftArrow } from './../../assets/icons';
import { Props } from './functions';
import { style } from './styles';

const Header = ({ page, previousPage }: Props) => {
  const renderHeader = () => {
    if (page === 'Home') {
      return (
        <>
          <Image source={pin} style={style.image} />
          <Text style={style.headerText}>Ebenezer Geetha Nilaya...</Text>
        </>
      );
    } else {
      return (
        <>
          <Image source={leftArrow} style={style.image} />
          <Text style={style.headerText}>{previousPage}</Text>
        </>
      );
    }
  };

  return (
    <View style={style.headerView}>
      <TouchableOpacity style={style.headerContainer}>
        {renderHeader()}
      </TouchableOpacity>
      <TouchableOpacity style={style.headerContainer}>
        <Image source={shoppingCart} style={style.image} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
