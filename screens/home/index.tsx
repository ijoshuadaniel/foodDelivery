import { Image, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { style } from './style';
import { globalStyle } from '../../app.style';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import SubscriptionMenu from '../../components/subscriptionMenu';
import { banner } from '../../assets/images';

const HomePage = () => {
  return (
    <SafeAreaView style={globalStyle.appView}>
      <StatusBar style='light' />
      <Header page='Home' />
      <ScrollView style={style.home}>
        <SearchBar />
        <SubscriptionMenu />
        <View style={style.banner}>
          <Image source={banner} style={style.bannerImage} />
        </View>
        {/* <View style={style.homeChefs}>
          <Text style={style.homeChefsText}>Home Chefs</Text>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
